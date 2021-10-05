import { Button } from '@components/ui/Button'
import { Form, useZodForm } from '@components/ui/Form'
import { Input } from '@components/ui/Input'
import { TextArea } from '@components/ui/TextArea'
import { CurrencyDollarIcon } from '@heroicons/react/outline'
import { ethers } from 'ethers'
import { useState } from 'react'
import toast from 'react-hot-toast'
import Web3Modal from 'web3modal'
import { number, object, string } from 'zod'

import Market from '../../../../../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../../../../../artifacts/contracts/NFT.sol/NFT.json'
import { nftaddress, nftmarketaddress } from '../../../../../config'

const newNFTSchema = object({
  title: string()
    .min(1, { message: '🖼 NFT title should not be empty' })
    .max(190, { message: '🖼 NFT title should not exceed 10000 characters' }),
  body: string()
    .min(1, { message: '🖼 NFT description should not be empty' })
    .max(10000, {
      message: '🖼 NFT description should not exceed 10000 characters'
    }),
  price: number().default(0)
})

export default function NFTType() {
  const [formInput, updateFormInput] = useState({
    price: '',
    name: '',
    description: ''
  })

  async function createMarket() {
    const { name, description, price } = formInput
    if (!name || !description || !price) return
    try {
      mintNFT(
        'https://mumbai.polygonscan.com/address/0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3'
      )
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async function mintNFT(url: string) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    console.log(tx)
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()

    const price = ethers.utils.parseUnits(formInput.price, 'ether')

    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, {
      value: listingPrice
    })
    await transaction.wait()
    toast.success('NFT has been posted successfully')
  }

  const form = useZodForm({
    schema: newNFTSchema
  })

  return (
    <Form form={form} className="space-y-2" onSubmit={() => alert('WIP')}>
      <Input placeholder="Asset Name" {...form.register('title')} />
      <TextArea
        placeholder="Asset Description"
        {...form.register('description')}
      />
      <Input
        prefix={<CurrencyDollarIcon className="h-5 w-5" />}
        type="number"
        placeholder="Price in ETH"
        {...form.register('price')}
      />
      <Button onClick={createMarket}>Post NFT</Button>
    </Form>
  )
}
