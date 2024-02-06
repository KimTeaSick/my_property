import axios from "axios"

const Instance = axios.create({
  baseURL: "http://0.0.0.0:8556",
})

const get = async (url: string, header = {}, params = {}) => {
  const res = await Instance.get(url, { headers: header, params: params })
  return res
}
const post = async (url: string, header = {}, body = {}) => {
  const res = await Instance.post(url, body, { headers: header })
  return res
}

export { get, post }