"use client"

import { StaticImageData } from "next/image"
import ListItem from "../headless/StockListItem"

type Stock = {
  icon: StaticImageData
  title: string
  price: number
  unit: number
  total: number
  percent: number
  platform: number
}

type Props = {
  stockList: Stock[]
}

const flexCol = "flex flex-col"
const title = "text-lg font-bold text-slate-700"
const subTitle = "font-semibold text-slate-700"
const subscript = "text-sm text-slate-600"

const List = ({ stockList }: Props) => {
  return (
    <div className={[flexCol, "gap-2 items-center"].join(" ")}>
      {stockList.map((value, index) => (
        <ListItem icon={value.icon} title={value.title} price={value.price} unit={value.unit} total={value.total} percent={value.percent} key={index}>
          <div className="flex bg-slate-50 p-2 justify-between items-center rounded-md w-[29rem]">
            <div className="flex gap-2 items-center ">
              <ListItem.Icon />
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
              <ListItem.Percent styles={subscript} />
            </div>
          </div>
        </ListItem>
      ))
      }
    </div >
  )
}
export default List