import axios from "axios"
import { isAxiosError } from "axios"

const BASE_URL = "https://truesolar.truecorp.co.th/api"
// const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchPrivate = (() => {

    const client = axios.create({
        baseURL: BASE_URL,
    })

    client.interceptors.request.use((config) => {
        let token = localStorage.getItem("atkn")
        if (!token || !token.trim().length) throw new Error("unauthorized")
        else token = token.replace(/"/g, "")

        config.headers.Authorization = `Bearer ${token}`
        return config
    })


    client.interceptors.response.use(
        (response) => response,
        (error) => {

            if (isAxiosError(error) && error?.response?.status === 401) {
                localStorage.removeItem("atkn")
                localStorage.removeItem("texp")
                window.location.href = "/login"
            }

            return Promise.reject(error)
        }
    )

    return client
})()

export const fetchPublic = (() => {
    return axios.create({
        baseURL: BASE_URL,
    })
})()