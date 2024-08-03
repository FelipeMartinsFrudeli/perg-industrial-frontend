import { api } from "@/lib/axios";
// import { type Address } from "./property";

export interface User {
  email: string
  role: number
}

export interface LoginData {
  email: string
  password: string
}

export interface RegisterUserData extends LoginData {
  name: string
  phone: string
  RG: string
  CPF_CNPJ: string
  plan: number
  property_value: number
}

export const fetchUser = () => api.get<User>('/api/user')

export const postLogin = (data: LoginData) => api.post('/api/login', data)

export const postLogout = () => api.post('/api/logout')

export const postRegisterUser = (data: RegisterUserData) => api.post('/api/register', data)