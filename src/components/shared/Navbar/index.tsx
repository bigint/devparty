import { Button } from '@components/ui/Button'
import AppContext from '@components/utils/AppContext'
import { Disclosure } from '@headlessui/react'
import {
  HomeIcon,
  LightningBoltIcon,
  LoginIcon,
  MenuAlt4Icon,
  ShoppingBagIcon,
  UserAddIcon,
  XIcon
} from '@heroicons/react/outline'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import BetaBadge from '../BetaBadge'
import MenuItems from './MenuItems'
import Notification from './Notification'
import Search from './Search'

const Invite = dynamic(() => import('./Invite'))
const StaffBar = dynamic(() => import('./StaffBar'))

const Navbar: React.FC = () => {
  const { currentUser, currentUserLoading, staffMode } = useContext(AppContext)

  interface NavItemProps {
    url: string
    name: string
    current: boolean
    isMobile: boolean
    icon: object
  }

  const NavItem = ({ url, name, current, isMobile, icon }: NavItemProps) => {
    return (
      <Link href={url} passHref>
        <a
          className={clsx(
            'px-3 py-2 rounded-lg font-black cursor-pointer flex items-center justify-items-start gap-2',
            {
              block: isMobile,
              'text-brand-600 dark:text-white bg-brand-200 dark:bg-gray-800':
                current,
              'text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800':
                !current
            }
          )}
          aria-current={current ? 'page' : undefined}
        >
          {icon}
          {name}
        </a>
      </Link>
    )
  }

  interface NavItemsProps {
    isMobile?: boolean
  }

  const NavItems = ({ isMobile = false }: NavItemsProps) => {
    const router = useRouter()

    return (
      <>
        <NavItem
          url={currentUser ? '/home' : '/'}
          name="Home"
          current={router.pathname == '/'}
          isMobile={isMobile}
          icon={<HomeIcon className="block sm:hidden h-8 w-8" />}
        />
        <NavItem
          url="/products"
          name="Products"
          current={router.pathname == '/products'}
          isMobile={isMobile}
          icon={<ShoppingBagIcon className="block sm:hidden h-8 w-8" />}
        />
        <NavItem
          url="/explore"
          name="Explore"
          current={router.pathname == '/explore'}
          isMobile={isMobile}
          icon={<LightningBoltIcon className="block sm:hidden h-8 w-8" />}
        />
      </>
    )
  }

  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-lg backdrop-saturate-150 w-full shadow sticky top-0 z-50"
    >
      {({ open }) => (
        <>
          {currentUser?.isStaff && staffMode && <StaffBar />}
          <div className="container mx-auto sm:max-w-screen-2xl sm:px-5">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:justify-start">
                <div className="flex-shrink-0 flex items-center space-x-3">
                  <Link href={currentUser ? '/home' : '/'} passHref>
                    <a>
                      <img
                        className="block h-9 w-auto cursor-pointer"
                        src="/logo.svg"
                        alt="Devparty"
                      />
                    </a>
                  </Link>
                  <BetaBadge />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex items-center space-x-4">
                    <NavItems />
                    <div className="hidden md:block">
                      <Search />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {currentUserLoading ? (
                  <div className="shimmer rounded-full h-9 w-9"></div>
                ) : currentUser ? (
                  <div className="flex items-center gap-5">
                    <div className="hidden md:block">
                      <Invite />
                    </div>
                    <Notification />
                    <MenuItems currentUser={currentUser} />
                  </div>
                ) : (
                  <div className="space-x-4 flex">
                    <div className="hidden sm:block">
                      <Link href="/signup" passHref>
                        <Button
                          size="lg"
                          variant="primary"
                          className="py-2"
                          icon={<UserAddIcon className="h-4 w-4" />}
                        >
                          Signup
                        </Button>
                      </Link>
                    </div>
                    <div className="hidden sm:block">
                      <Link href="/login" passHref>
                        <Button
                          size="lg"
                          variant="success"
                          className="py-2"
                          icon={<LoginIcon className="h-4 w-4" />}
                        >
                          Login
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
                <div className="flex items-center sm:hidden">
                  <Disclosure.Button
                    className="border-none outline-none ring-opacity-0 focus:border-none focus:outline-none focus:ring-opacity-0 hover:bg-transparent focus:bg-transparent"
                    as={Button}
                    outline
                  >
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuAlt4Icon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-1 pb-2 space-y-1">
              <Search />
            </div>
            <div className="px-2 pt-1 pb-2 space-y-1">
              <NavItems isMobile={isMobile} />
            </div>
            <div className="px-2 pt-1 pb-3 flex items-center justify-between gap-x-3">
              <Link href="/login" passHref>
                <Button
                  className="h-12 w-full flex justify-center"
                  size="lg"
                  icon={<LoginIcon className="h-6 w-6" />}
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button
                  className="h-12 w-full flex justify-between"
                  variant="success"
                  size="lg"
                  icon={<UserAddIcon className="h-6 w-6" />}
                >
                  Signup
                </Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
