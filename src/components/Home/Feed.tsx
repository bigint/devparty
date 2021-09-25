import { gql, useQuery } from '@apollo/client'
import SinglePost, { PostFragment } from '@components/Highlight/SinglePost'
import PostsShimmer from '@components/shared/Shimmer/PostsShimmer'
import { EmptyState } from '@components/ui/EmptyState'
import { ErrorMessage } from '@components/ui/ErrorMessage'
import { CollectionIcon } from '@heroicons/react/outline'
import React from 'react'
import useInView from 'react-cool-inview'

import { HomeFeedQuery } from './__generated__/Feed.generated'

export const HOME_FEED_QUERY = gql`
  query HomeFeedQuery($after: String, $type: String!) {
    highlights: homeFeed(first: 10, after: $after, type: $type) {
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
  ${PostFragment}
`

interface Props {
  feedType?: string
}

const HomeFeed: React.FC<Props> = ({ feedType }) => {
  const { data, loading, error, fetchMore } = useQuery<HomeFeedQuery>(
    HOME_FEED_QUERY,
    {
      variables: {
        after: null,
        type: feedType
      }
    }
  )
  const highlights = data?.highlights?.edges?.map((edge) => edge?.node)
  const pageInfo = data?.highlights?.pageInfo

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
            message="No highlights found, follow some users!"
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

export default HomeFeed
