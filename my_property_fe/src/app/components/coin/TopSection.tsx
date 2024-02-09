"use client"
import { useEffect, useState } from "react"
import { CoinType } from "./List"
import { numChange } from "@/lib/numChange"

type Props = {
  coinList: CoinType[] | undefined
}

const TopSection = ({ coinList }: Props) => {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    Array.isArray(coinList) && setTotal(coinList?.map(obj => obj.total).reduce((acc, value) => acc + value, 0))
  }, [coinList])
  return (
    <div className="flex w-full justify-center items-center p-5">
      <div className="flex flex-col gap-2 w-[70%]">
        <h1 className="text-2xl">코인</h1>
        <div className="flex justify-between">
          <h1 className="text-xl">코인 총합 : </h1>
          <h1 className="text-xl font-semibold">{numChange(total)}원</h1>
        </div>
      </div>
    </div>
  )
}

export default TopSection