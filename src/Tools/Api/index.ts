import axios from 'axios'

const Api = (token ?: string) => {
  return axios.create({
    baseURL : "https://api.imagetracker.org/",
    headers : {
      "Content-Type" : "application/json; charset=utf-8",
      "Authorization" : token ?? ""
    },
})
}

export default Api