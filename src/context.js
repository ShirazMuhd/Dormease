import { createContext } from "react"
export const authContext = createContext({auth_status: false, user: {}})
export const hostelContext = createContext({id: null})