import { gql, useQuery } from '@apollo/client'
import SinglePost, { PostFragment } from '@components/Highlight/SinglePost'
import PostsShimmer from '@components/shared/Shimmer/PostsShimmer'
import { EmptyState } from '@components/ui/EmptyState'
import { ErrorMessage } from '@components/ui/ErrorMessage'
import { CollectionIcon } from '@heroicons/react/outline'
import React from 'react'
import useInView from 'react-cool-inview'

import { ExploreFeedQuery } from './__generated__/Feed.generated'

export const EXPLORE_FEED_QUERY = gql`
  query ExploreFeedQuery($after: String) {
    highlights: exploreFeed(first: 10, after: $after) {
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

const ExploreFeed: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery<ExploreFeedQuery>(
    EXPLORE_FEED_QUERY,
    { variables: { after: null } }
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

export default ExploreFeed
