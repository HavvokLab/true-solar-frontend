export type Plant = {
    id: number
    name: string
    area?: string
    vendor_type: string
    installed_capacity: number
    lat: number
    long: number
    owner: string
    available: boolean
    created_at: Date
    updated_at: Date
}

export type GetPlantResponse = {
    plants: Plant[]
    count: number
}