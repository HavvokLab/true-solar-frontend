import { HuaweiCredential, Response } from "@/types"
import { fetchPrivate } from "."

export const getHuaweiCredentialAPI = async () => {
    return await fetchPrivate.get<Response<HuaweiCredential[]>>("/huawei/credential")
}

export const createHuaweiCredentialAPI = async (body: HuaweiCredential) => {
    return await fetchPrivate.post<Response>("/huawei/credential", body)
}

export const updateHuaweiCredentialAPI = async (id: number, body: HuaweiCredential) => {
    return await fetchPrivate.put<Response>(`/huawei/credential/${id}`, body)
}

export const deleteHuaweiCredentialAPI = async (id: number) => {
    return await fetchPrivate.delete<Response>(`/huawei/credential/${id}`)
}