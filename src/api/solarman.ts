import { SolarmanCredential, Response } from "@/types"
import { fetchPrivate } from "."

export const getSolarmanCredentialAPI = async () => {
    return await fetchPrivate.get<Response<SolarmanCredential[]>>("/solarman/credential")
}

export const createSolarmanCredentialAPI = async (body: SolarmanCredential) => {
    return await fetchPrivate.post<Response>("/solarman/credential", body)
}

export const updateSolarmanCredentialAPI = async (id: number, body: SolarmanCredential) => {
    return await fetchPrivate.put<Response>(`/solarman/credential/${id}`, body)
}

export const deleteSolarmanCredentialAPI = async (id: number) => {
    return await fetchPrivate.delete<Response>(`/solarman/credential/${id}`)
}