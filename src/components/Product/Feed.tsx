import { gql, useQuery } from '@apollo/client'
import SinglePost, { PostFragment } from '@components/Highlight/SingleHighlight'
import PostsShimmer from '@components/shared/Shimmer/HighlightsShimmer'
import { EmptyState } from '@components/ui/EmptyState'
import { ErrorMessage } from '@components/ui/ErrorMessage'
import { CollectionIcon } from '@heroicons/react/outline'
import React from 'react'
import useInView from 'react-cool-inview'
import { Product } from 'src/__generated__/schema.generated'

import { ProductFeedQuery } from './__generated__/Feed.generated'

const PRODUCT_FEED_QUERY = gql`
  query ProductFeedQuery($after: String, $slug: String!) {
    product(slug: $slug) {
      id
      highlights(first: 10, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            ...PostFragment
          }
        }
      }
    }
  }
  ${PostFragment}
`

interface Props {
  product: Product
}

const ProductFeed: React.FC<Props> = ({ product }) => {
  const { data, loading, error, fetchMore } = useQuery<ProductFeedQuery>(
    PRODUCT_FEED_QUERY,
    {
      variables: {
        after: null,
        slug: product?.slug
      }
    }
  )

  const highlights = data?.product?.highlights?.edges?.map((edge) => edge?.node)
  const pageInfo = data?.product?.highlights?.pageInfo

  const { observe } = useInView({
    threshold: 1,
    onChange: ({ observe, unobserve }) => {
      unobserve()
      observe()
    },
    onEnter: () => {
      if (pageInfo?.hasNextPage) {
        fetchMore({
          variables: {
            after: pageInfo?.endCursor ? pageInfo?.endCursor : null
          }
        })
      }
    }
  })

  if (loading) return <PostsShimmer />

  return (
    <div>
      <ErrorMessage title="Failed to load highlights" error={error} />
      <div className="space-y-3">
        {highlights?.length === 0 ? (
          <EmptyState
            message={
              <div>
                <span>No highlights found in</span>
                <span className="font-bold ml-1">{product?.name}</span>
              </div>
            }
            icon={<CollectionIcon className="h-8 w-8" />}
          />
        ) : (
          highlights?.map((post: any) => (
            <SinglePost key={post?.id} post={post} showParent />
          ))
        )}
        {pageInfo?.hasNextPage && <span ref={observe}></span>}
      </div>
    </div>
  )
}

export default ProductFeed
