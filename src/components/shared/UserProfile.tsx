import { BadgeCheckIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'

import { User } from '~/__generated__/schema.generated'
import AppContext from '~/components/utils/AppContext'

import FlyoutPopover from '../ui/FlyoutPopover'
import Follow from '../User/Follow'
import Slug from './Slug'

interface Props {
  user: User
  showFollow?: boolean
}

const UserProfile: React.FC<Props> = ({ user, showFollow = false }) => {
  const { currentUser } = useContext(AppContext)

  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-3 items-center">
        <img
          src={user?.profile?.avatar as string}
          className="h-11 w-11 rounded-full bg-gray-200"
          alt={`@${user?.username}'s avatar`}
        />
        <div>
          <div className="flex items-center gap-1.5">
            <div className="inline-flex">
              <FlyoutPopover user={user}>
                <span>{user?.profile?.name}</span>
                {user?.isVerified && (
                  <span title="Verified">
                    <BadgeCheckIcon className="h-4 w-4 text-indigo-500" />
                  </span>
                )}
              </FlyoutPopover>
            </div>
          </div>
          <Slug slug={user?.username} prefix="@" />
        </div>
      </div>
      {currentUser && showFollow && <Follow user={user} showText={false} />}
    </div>
  )
}

export default UserProfile
