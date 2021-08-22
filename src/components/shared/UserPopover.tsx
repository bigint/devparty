import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment, ReactNode, useRef, useState } from 'react'

import { User } from '~/__generated__/schema.generated'

export default function UserPopover({
  children,
  user
}: {
  children: ReactNode
  user: User
}) {
  let timeout: NodeJS.Timeout
  const openTimeoutDuration = 500
  const closeTimeoutDuration = 20

  const buttonRef = useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false)

  const toggleMenu = (open: boolean) => {
    setOpenState(open)
    buttonRef?.current?.click()
  }

  const onHover = (open: boolean, action: string) => {
    clearTimeout(timeout)
    if (!open && !openState && action === 'onMouseEnter') {
      clearTimeout(timeout)
      timeout = setTimeout(() => toggleMenu(true), openTimeoutDuration)
    }
    if (open && openState && action === 'onMouseLeave') {
      clearTimeout(timeout)
      timeout = setTimeout(() => toggleMenu(false), closeTimeoutDuration)
    }
  }

  return (
    <Popover className="mx-auto w-48 relative">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, 'onMouseEnter')}
          onMouseLeave={() => onHover(open, 'onMouseLeave')}
        >
          <Link href={`/@${user?.username}`} passHref>
            <Popover.Button
              as="span"
              className="font-bold inline-flex items-center cursor-pointer text-left space-x-1 focus:outline-none"
              ref={buttonRef}
            >
              <Fragment>{children}</Fragment>
            </Popover.Button>
          </Link>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute top-6 z-10 md:w-56 w-48 mx-auto"
            >
              <div className="p-5 bg-gray-100 dark:bg-black border border-gray-100 dark:border-gray-900 rounded-lg">
                <h6 className="font-bold mb-2">{user?.profile?.name}</h6>
                <p>{user?.profile?.bio}</p>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )
}
