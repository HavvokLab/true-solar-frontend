import { Response, InstalledCapacity } from "@/types"
import { fetchPrivate } from "."

export const getInstalledCapacityAPI = async () => {
    return fetchPrivate.get<Response<InstalledCapacity>>("/installed-capacity")
}

export const updateInstalledCapacityAPI = async (body: InstalledCapacity) => {
    return fetchPrivate.put("/installed-capacity", body)
}