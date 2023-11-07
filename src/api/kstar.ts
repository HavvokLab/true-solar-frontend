import { KstarCredential, Response } from "@/types"
import { fetchPrivate } from "."

export const getKstarCredentialAPI = async () => {
    return await fetchPrivate.get<Response<KstarCredential[]>>("/kstar/credential")
}

export const createKstarCredentialAPI = async (body: KstarCredential) => {
    return await fetchPrivate.post<Response>("/kstar/credential", body)
}

export const updateKstarCredentialAPI = async (id: number, body: KstarCredential) => {
    return await fetchPrivate.put<Response>(`/kstar/credential/${id}`, body)
}

export const deleteKstarCredentialAPI = async (id: number) => {
    return await fetchPrivate.delete<Response>(`/kstar/credential/${id}`)
}