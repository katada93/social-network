import axios from "axios"

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "44b52217-0502-40be-b94d-1f8c6b606634"
  }
})

export const userAPI = {
  getUsers: (pageSize = 50, currentPage = 1) => (
    instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then(({ data }) => data))
}