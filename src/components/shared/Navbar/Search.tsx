import { gql, useLazyQuery } from '@apollo/client'
import { Button } from '@components/ui/Button'
import { SearchIcon } from '@heroicons/react/outline'

import {
  SearchPostsQuery,
  SearchProductsQuery,
  SearchUsersQuery
} from './__generated__/Search.generated'

export const SEARCH_POSTS_QUERY = gql`
  query SearchPostsQuery($keyword: String!) {
    searchPosts(first: 5, keyword: $keyword) {
      edges {
        node {
          id
          body
        }
      }
    }
  }
`

export const SEARCH_USERS_QUERY = gql`
  query SearchUsersQuery($keyword: String!) {
    searchUsers(first: 5, keyword: $keyword) {
      edges {
        node {
          id
          username
        }
      }
    }
  }
`

export const SEARCH_PRODUCTS_QUERY = gql`
  query SearchProductsQuery($keyword: String!) {
    searchProduct(first: 5, keyword: $keyword) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`

const Search: React.FC = () => {
  const [searchPosts, {}] = useLazyQuery<SearchPostsQuery>(SEARCH_POSTS_QUERY)
  const [searchUsers, {}] = useLazyQuery<SearchUsersQuery>(SEARCH_USERS_QUERY)
  const [searchProducts, {}] = useLazyQuery<SearchProductsQuery>(
    SEARCH_PRODUCTS_QUERY
  )

  const handleSearch = (evt: any) => {
    searchPosts({
      variables: {
        keyword: evt.target.value
      }
    })
    searchUsers({
      variables: {
        keyword: evt.target.value
      }
    })
    searchProducts({
      variables: {
        keyword: evt.target.value
      }
    })
  }

  return (
    <div className="h-10 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus-within:ring-1  focus-within:border-brand-500 focus-within:ring-brand-400 outline-none rounded-lg shadow-sm flex items-center justify-evenly p-1">
      <input
        className="outline-none border-none focus:ring-0 rounded-lg m-auto px-2 py-0"
        type="text"
        placeholder="Search Devparty..."
        onChange={handleSearch}
      />
      <Button variant="primary" className="h-8 w-8 px-1.5">
        <SearchIcon className="h-full w-full" />
      </Button>
    </div>
  )
}

export default Search
