import { Switch } from '@headlessui/react'
import { RefreshIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

import { Post } from '~/__generated__/schema.generated'
import AppContext from '~/components/utils/AppContext'

type Props = {
  entity: Post
  handleRepost: any
  loading: boolean
}

const RepostButton: React.FC<Props> = ({ entity, handleRepost, loading }) => {
  const { currentUser } = useContext(AppContext)
  const router = useRouter()
  const [isReposted, setIsReposted] = useState<boolean>(false)

  useEffect(() => {
    if (entity?.hasLiked) setIsReposted(entity?.hasLiked)
  }, [entity])

  const toggleLike = () => {
    if (!currentUser) return router.push('/login')
    setIsReposted(!isReposted)
    handleRepost(entity)
  }

  return (
    <Switch
      checked={entity?.hasLiked}
      onChange={toggleLike}
      className="text-pink-500 hover:text-pink-400 flex items-center gap-2"
      disabled={loading}
    >
      {isReposted ? (
        <RefreshIcon className="h-5 w-5 text-green-600" />
      ) : (
        <RefreshIcon className="h-5 w-5 text-gray-600" />
      )}
      {(entity?.likes?.totalCount as number) > 0 && (
        <div className="text-xs">{entity?.likes?.totalCount}</div>
      )}
    </Switch>
  )
}

export default RepostButton
