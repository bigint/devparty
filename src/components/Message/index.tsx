import { GridItemEight, GridItemFour, GridLayout } from '@components/GridLayout'
import { Card, CardBody } from '@components/ui/Card'
import React from 'react'

import ChatUserList from './ChatUserList'
import Conversation from './Conversation'

const Messages: React.FC = () => {
  return (
    <GridLayout>
      <GridItemFour>
        <Card>
          <CardBody>
            <ChatUserList />
          </CardBody>
        </Card>
      </GridItemFour>
      <GridItemEight>
        <Card>
          <CardBody>
            <Conversation />
          </CardBody>
        </Card>
      </GridItemEight>
    </GridLayout>
  )
}

export default Messages
