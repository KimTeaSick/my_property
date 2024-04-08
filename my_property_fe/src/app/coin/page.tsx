"use client"
import { Metadata } from 'next'

import List from '../components/coin/List'
import TopSection from '../components/coin/TopSection'
import { useMyCoin } from '@/service/coin'

export const metadate: Metadata = {
  title: '김요셉 노후관리 | 코인',
  description: '코인 현황'
}


const Coin = () => {
  const coinList = useMyCoin()

  return (
    <div className="flex flex-col p-5">
      <TopSection coinList={coinList?.data} />
      <List coinList={coinList?.data} />
    </div>
  )
}

export default Coin