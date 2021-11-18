import { GridItemEight, GridItemFour, GridLayout } from '@components/GridLayout'
import FeedType from '@components/Home/FeedType'
import NewPost from '@components/Post/NewPost'
import { PageLoading } from '@components/UI/PageLoading'
import AppContext from '@components/utils/AppContext'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'

import HomeFeed from './Feed'
import RecentProducts from './RecentProducts'
import WhoToFollow from './WhoToFollow'

const Footer = dynamic(() => import('@components/shared/Footer'))

const Home: React.FC = () => {
  const { currentUser, currentUserLoading } = useContext(AppContext)
  const router = useRouter()
  const [feedType, setFeedType] = useState<string>('ALL')

  if (currentUserLoading) {
    return <PageLoading message="Loading home" />
  }

  if (!currentUser) {
    if (process.browser) router.push('/login')
    return <PageLoading message="Redirecting to Login" />
  }

  if (!currentUser.isOnboarded) {
    if (process.browser) router.push('/onboarding')
    return <PageLoading message="Redirecting to Onboard" />
  }

  return (
    <GridLayout>
      <GridItemEight>
        <div className="space-y-3">
          {currentUser && <NewPost />}
          <FeedType setFeedType={setFeedType} feedType={feedType} />
          <HomeFeed feedType={feedType} />
        </div>
      </GridItemEight>
      <GridItemFour>
        <WhoToFollow />
        <RecentProducts />
        <Footer />
      </GridItemFour>
    </GridLayout>
  )
}

export default Home
