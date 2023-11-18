export type SiteRegionMapping = {
    id: number
    code: string
    name: string
    area?: string
    created_at: Date
    updated_at: Date
}

export type GetCityResponse = {
    count: number
    site_region_mappings: SiteRegionMapping[]
}

export type UpdateRegionRequest = {
    area: string
    cities: string[]
}

export type UpdateCityRequest = {
    code: string
    name: string
    area?: string
}

export type CreateCityRequest = {
    code: string
    name: string
    area?: string
}

export type Region = {
    regions: AreaWithCity[]
}

export type AreaWithCity = {
    area: string
    cities: SiteRegionMapping[]
}