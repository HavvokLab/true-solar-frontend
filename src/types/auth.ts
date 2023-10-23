// |=> API
export type LoginRequest = {
    username: string
    password: string
}

export type LoginResponse = {
    access_token: string
    expired_at: Date
}

// |=> Data
export type ExpiredAtLocalStorage = Date | null
export type TokenLocalStorage = string | null