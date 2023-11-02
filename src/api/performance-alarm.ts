import { PerformanceAlarm, Response } from "@/types"
import { fetchPrivate } from "."

export const getPerformanceAlarmLowAPI = async () => {
    return await fetchPrivate.get<Response<PerformanceAlarm>>("/performance-alarm/low")
}

export const updatePerformanceAlarmLowAPI = async(body: PerformanceAlarm) => {
    return await fetchPrivate.put<Response>("/performance-alarm/low", body)
}