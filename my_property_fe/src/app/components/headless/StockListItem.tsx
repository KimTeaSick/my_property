import Image, { StaticImageData } from 'next/image'
import { createContext, useContext } from 'react'
import Default from "../../../assets/default.png"
import { numChange } from '@/lib/numChange'


type ListItemContextType = {
  icon: StaticImageData
  title: string
  price: number
  unit: number
  total: number
  percent: number
}

type ListItemProps = ListItemContextType & React.PropsWithChildren<{}>

const ListItemContext = createContext({
  icon: Default,
  title: "",
  price: 0,
  total: 0,
  unit: 0,
  percent: 0
})

const useListItemContext = () => {
  const context = useContext(ListItemContext)
  return context
}

const ListItem = ({ icon, title, price, total, percent, unit, children }: ListItemProps) => {
  const value = { icon, title, price, total, percent, unit }
  return (
    <ListItemContext.Provider value={value}>
      {children}
    </ListItemContext.Provider>
  )
}

const ListItemIcon = () => {
  const { icon } = useListItemContext()
  return (<Image width={40} height={40} src={icon ? icon : Default} alt='no-image' />)
}
const ListItemTitle = ({ styles }: { styles?: string }) => {
  const { title } = useListItemContext()
  return (<label className={styles}>{title}</label>)
}
const ListItemPrice = ({ styles }: { styles?: string }) => {
  const { price } = useListItemContext()
  return (<label className={styles}> {numChange(price)}원</label>)
}
const ListItemUnit = ({ styles }: { styles?: string }) => {
  const { unit } = useListItemContext()
  return (<label className={styles}>{numChange(unit)}개</label>)
}
const ListItemTotal = ({ styles }: { styles?: string }) => {
  const { total } = useListItemContext()
  return (<label className={styles}>{numChange(total)}</label>)
}
const ListItemPercent = ({ styles }: { styles?: string }) => {
  const { percent } = useListItemContext()
  return (<label className={styles}>{percent}%</label>)
}

ListItem.Icon = ListItemIcon
ListItem.Title = ListItemTitle
ListItem.Price = ListItemPrice
ListItem.Unit = ListItemUnit
ListItem.Total = ListItemTotal
ListItem.Percent = ListItemPercent

export default ListItem