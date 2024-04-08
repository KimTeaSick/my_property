import List from "../components/stock/List"
import TopSection from "../components/stock/TopSection"
import Shinhan from "../../assets/shinhan.png"
import { Metadata } from "next"

const dumyData = [
  { icon: Shinhan, title: "삼성전자", price: 15, unit: 5, total: 75, percent: 5, platform: 4 },
  { icon: Shinhan, title: "삼성전자", price: 15, unit: 5, total: 75, percent: 5, platform: 4 },
  { icon: Shinhan, title: "삼성전자", price: 15, unit: 5, total: 75, percent: 5, platform: 4 },
  { icon: Shinhan, title: "삼성전자", price: 15, unit: 5, total: 75, percent: 5, platform: 4 }
]

export const metadata: Metadata = {
  title: "김요셉 노후관리 | 주식",
  description: "인생을 걸어라",
};

const StockPage = () => {
  return (
    <div className="flex flex-col p-5">
      <TopSection />
      <List stockList={dumyData} />
    </div>
  )
}

export default StockPage