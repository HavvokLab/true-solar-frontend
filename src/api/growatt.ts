import { GrowattCredential, Response } from "@/types"
import { fetchPrivate } from "."

export const getGrowattCredentialAPI = async () => {
    return await fetchPrivate.get<Response<GrowattCredential[]>>("/growatt/credential")
}

export const createGrowattCredentialAPI = async (body: GrowattCredential) => {
    return await fetchPrivate.post<Response>("/growatt/credential", body)
}

export const updateGrowattCredentialAPI = async (id: number, body: GrowattCredential) => {
    return await fetchPrivate.put<Response>(`/growatt/credential/${id}`, body)
}

export const deleteGrowattCredentialAPI = async (id: number) => {
    return await fetchPrivate.delete<Response>(`/growatt/credential/${id}`)
}