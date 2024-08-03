import { api } from "@/lib/axios";
import { type Timestamp } from "./timestamp";
import { type Property } from "./property";
import { type Pagination } from "./pagination";

export interface Client extends Timestamp {
  id: number,
  name: string
  phone: string
  RG: string
  CPF_CNPJ: string
  contract_link: string
  UserId: number
  Properties?: Property[]
}

export interface ClientDashboardStats {
  total_views: string
  total_leads: string
  total_proposals: string
  total_visits: string
}

export interface Clients extends Pagination<Client[]> {}

export interface ClientDashboard {
  client: Client,
  properties: Pagination<Property[]>
  dashboardStats: ClientDashboardStats
}

export const fetchClientDashboard = () => api.get<ClientDashboard>('/api/dashboard')

export const fetchClient = (id: string) => api.get<Client>(`/api/client/${id}`)

export const fetchClients = (page: number, size: number) => api.get<Clients>(`/api/clients?page=${page}&size=${size}`)

export const fetchActiveClients = (page: number, size: number) => api.get<Clients>(`/api/clients/active?page=${page}&size=${size}`)