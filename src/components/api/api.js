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
      .then(({ data }) => data)),
  follow: (userId) => instance.post(`follow/${userId}`),
  unFollow: (userId) => instance.delete(`follow/${userId}`)
}

export const profileAPI = {
  getProfile: (userId) => instance.get(`profile/${userId}`),
  getStatus: (userId) => instance.get(`profile/status/${userId}`),
  updateStatus: (status) => instance.put('profile/status', { status: status })
}

export const authAPI = {
  me: () => instance.get('auth/me'),
  login: (email, password, rememberMe = false) => (
    instance.post('auth/login', { email, password, rememberMe })
  ),
  logout: () => instance.delete('auth/login')
}