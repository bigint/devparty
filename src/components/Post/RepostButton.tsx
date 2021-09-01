import { Switch } from '@headlessui/react'
import { RefreshIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

import { Post } from '~/__generated__/schema.generated'
import AppContext from '~/components/utils/AppContext'

type Props = {
  entity: Post
  handleLike: any
  loading: boolean
}

const RepostButton: React.FC<Props> = ({ entity, handleLike, loading }) => {
  const { currentUser } = useContext(AppContext)
  const router = useRouter()
  const [isLiked, setIsLiked] = useState<boolean>(false)

  useEffect(() => {
    if (entity?.hasLiked) setIsLiked(entity?.hasLiked)
  }, [entity])

  const toggleLike = () => {
    if (!currentUser) return router.push('/login')
    setIsLiked(!isLiked)
    handleLike(entity)
  }

  return (
    <Switch
      checked={entity?.hasLiked}
      onChange={toggleLike}
      className="text-pink-500 hover:text-pink-400 flex items-center gap-2"
      disabled={loading}
    >
      {isLiked ? (
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
