import axios from "../libs/axios"

const getUserInfo = (data) => {
  return axios.post("/api/getUserInfo", data)
}
const getRequest = (data) => { 
  return axios.get("/api/hello", data)
}
export  { getUserInfo, getRequest }