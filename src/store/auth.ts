import { KibanaCredential } from "@/types";
import { atom } from "recoil";

export const authState = atom<boolean>({
    key: "auth",
    default: false
})

export const kibanaCredentialState = atom<KibanaCredential | null>({
    key: "kibana_credential",
    default: null
})