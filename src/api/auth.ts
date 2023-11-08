import { KibanaCredential, LoginRequest, LoginResponse, Response } from "@/types";
import { fetchPrivate, fetchPublic } from ".";

export const loginAPI = async (data: LoginRequest) => {
    return fetchPublic.post<Response<LoginResponse>>("/auth/login", data)
}

export const getKibanaCredentialAPI = async () => {
    return fetchPrivate.get<Response<KibanaCredential>>("/kibana/credential")
}

export const getKibanaCredentialWithTokenAPI = async (token: string) => {
    return fetchPublic.get<Response<KibanaCredential>>("/kibana/credential", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}