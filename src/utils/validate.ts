export const validateOwner = (owner: string) => {
    const owners = ["TRUE", "ALTERVIM"]
    if (!owners.includes(owner))
        return "Owner must be TRUE or ALTERVIM"
}