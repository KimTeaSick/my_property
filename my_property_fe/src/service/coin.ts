import { useQuery } from "@tanstack/react-query"
import { get } from "./index"
import { CoinType } from "@/app/components/coin/List"
import { AxiosResponse } from "axios"

const prefix = "/coin"

export const useMyCoin = () => {
  const queryKey = "/getMyCoin"
  const queryFn = async () => await get(prefix + queryKey).then((result: AxiosResponse<CoinType[]>) => result)
  const res = useQuery({ queryKey: [queryKey], queryFn })
  return res.data
}