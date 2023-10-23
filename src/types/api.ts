export type Response<T = any> = {
    success: boolean
    message?: string
    result?: T
}