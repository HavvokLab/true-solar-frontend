import { AxiosRequestConfig } from "axios"
import { fetchPrivate } from "."
import { GetPlantResponse, Plant, Response } from "@/types"

export const getPlantAPI = async (offset: number, limit: number) => {
    const conf: AxiosRequestConfig = {
        params: {
            offset, limit
        }
    }

    return await fetchPrivate.get<Response<GetPlantResponse>>("/plant", conf)
}

export const getAllPlantAPI = async() => {
    return await fetchPrivate.get<Response<Plant[]>>("/plant/all")
}

export const deletePlantAPI = async (id: number) => {
    return await fetchPrivate.delete<Response>("/plant/" + id)
}