"use client"

import { StaticImageData } from "next/image"
import ListItem from "../headless/StockListItem"
import { AxiosResponse } from "axios"

export type CoinType = {
  "coin_name": null,
  "coin_symbol": "nmr",
  "avg_price": 22580,
  "unit": 0.3882,
  "total": 8765.56,
  "platform": 8
}

type Props = {
  coinList: CoinType[] | undefined
}

const flexCol = "flex flex-col"
const title = "text-lg font-bold text-slate-700"
const subTitle = "font-semibold text-slate-700"
const subscript = "text-sm text-slate-600"

const List = ({ coinList }: Props) => {
  console.log(coinList);

  return (
    <div className={[flexCol, "gap-2 items-center"].join(" ")}>
      {Array.isArray(coinList) && coinList.map((value: CoinType, index: number) => (
        <ListItem title={value.coin_symbol} price={value.avg_price} unit={value.unit} total={value.total} key={index}>
          <div className="flex bg-slate-50 p-2 justify-between items-center rounded-md w-[29rem]">
            <div className="flex gap-2 items-center ">
              <div className={flexCol}>
                <ListItem.Title styles={title} />
                <div>
                  <ListItem.Unit styles={subscript} />
                  <ListItem.Price styles={subscript} />
                </div>
              </div>
            </div>
            <div className={flexCol}>
              <ListItem.Total styles={subTitle} />
            </div>
          </div>
        </ListItem>
      ))
      }
    </div >
  )
}
export default List