import { AxiosRequestConfig } from "axios"
import { fetchPrivate } from "."
import { CreateCityRequest, GetCityResponse, Region, Response, UpdateCityRequest, UpdateRegionRequest } from "@/types"

export const getCityAPI = async (offset: number, limit: number) => {
    const conf: AxiosRequestConfig = {
        params: { offset, limit }
    }

    return fetchPrivate.get<Response<GetCityResponse>>("/site-region/city", conf)
}

export const createCityAPI = async (body: CreateCityRequest) => {
    return fetchPrivate.post<Response>("/site-region/city", body)
}

export const updateCityAPI = async (id: number, body: UpdateCityRequest) => {
    return fetchPrivate.put<Response>(`/site-region/city/${id}`, body)
}

export const deleteCityAPI = async (id: number) => {
    return fetchPrivate.delete<Response>(`/site-region/city/${id}`)
}

export const getRegionAPI = async () => {
    return fetchPrivate.get<Response<Region>>("/site-region/region")
}

export const updateRegionAPI = async (id: number, body: UpdateRegionRequest) => {
    return await fetchPrivate.put<Response>(`/site-region/region/${id}`, body)
}

export const deleteAreaAPI = async (area: string) => {
    return await fetchPrivate.delete<Response>(`/site-region/area/${area}`)
}