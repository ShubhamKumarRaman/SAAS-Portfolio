import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
})

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

API.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error(error.response?.data || error.message)

        return Promise.reject(error)
    }
)

export default API