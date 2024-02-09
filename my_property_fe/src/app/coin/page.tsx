"use client"
import List from '../components/coin/List'
import TopSection from '../components/coin/TopSection'
import { useMyCoin } from '@/service/coin'

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