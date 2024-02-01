import List from "../components/stock/List"
import TopSection from "../components/stock/TopSection"
import Shinhan from "../../assets/shinhan.png"

const dumyData = [
  { icon: Shinhan, title: "삼성전자", price: 15, unit: 5, total: 75, percent: 5, platform: 4 },
  { icon: Shinhan, title: "삼성전자", price: 15, unit: 5, total: 75, percent: 5, platform: 4 },
  { icon: Shinhan, title: "삼성전자", price: 15, unit: 5, total: 75, percent: 5, platform: 4 },
  { icon: Shinhan, title: "삼성전자", price: 15, unit: 5, total: 75, percent: 5, platform: 4 }
]

const StockPage = () => {
  return (
    <div className="flex flex-col p-5">
      <TopSection />
      <List stockList={dumyData} />
    </div>
  )
}

export default StockPage