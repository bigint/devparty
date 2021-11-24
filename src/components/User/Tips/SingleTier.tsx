import { Button } from '@components/UI/Button'
import { TipTier } from '@graphql/types.generated'
import { HeartIcon } from '@heroicons/react/outline'
import Markdown from 'markdown-to-jsx'
import React from 'react'

interface Props {
  tier: TipTier
}

const SingleTier: React.FC<Props> = ({ tier }) => {
  return (
    <div className="p-5 border-2 border-transparent duration-700 transition ease-linear hover:border-brand-500 text-left rounded-lg mt-2 w-full dark:bg-gray-800 bg-white">
      <div className="items-center flex space-x-4 justify-between">
        <div>
          <h2 className="text-xl font-semibold">{tier?.name}</h2>
          <Markdown options={{ wrapper: 'article' }}>
            {tier?.description}
          </Markdown>
        </div>
        <div className="flex-none">
          <div className="flex">
            <span>Ξ</span>
            <h1 className="text-3xl md:text-4xl font-bold">{tier?.amount}</h1>
          </div>
          <div className="text-right text-xs">pay once</div>
        </div>
      </div>
      <div className="flex items-center space-x-4 justify-between mt-2">
        <span className="text-xs">You will pay 500 MATIC for 100 ETH</span>
        <Button
          className="!hover:bg-black"
          icon={<HeartIcon className="h-5 w-5" />}
          outline
        >
          Tip
        </Button>
      </div>
    </div>
  )
}

export default SingleTier
