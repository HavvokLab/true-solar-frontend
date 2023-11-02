export type PerformanceAlarm = {
    id: number
    name: string
    interval: number
    hit_day: number | null
    duration: number | null
    percentage: number
    created_at: Date
    updated_at: Date
}