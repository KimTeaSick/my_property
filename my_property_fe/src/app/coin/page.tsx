"use client"
import List from '../components/coin/List'
import TopSection from '../components/coin/TopSection'
import { useMyCoin } from '@/service/coin'

const Coin = () => {
  const coinList = useMyCoin()
  console.log("coin page data : ", coinList?.data);
  console.log("coin page data 2 : ",);

  return (
    <div className="flex flex-col p-5">
      <TopSection />
      <List coinList={coinList?.data} />
    </div>
  )
}

export default Coin