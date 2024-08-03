import { useQuery } from "@tanstack/react-query"
import { fetchActiveClients, fetchClient, fetchClientDashboard, fetchClients } from "@/api/client"

export const useClientDashboard = () => {
  return useQuery({
    queryKey: ['client-dashboard'],
    queryFn: fetchClientDashboard
  })
}

export const useClient = (id: string) => {
  return useQuery({
    queryKey: ['client', id],
    queryFn: () => fetchClient(id)
  })
}

export const useClients = (page?: number, size?: number) => {
  return useQuery({
    queryKey: ['clients', page, size],
    queryFn: () => fetchClients(page || 0, size || 10)
  })
}

export const useActiveClients = (page?: number, size?: number) => {
  return useQuery({
    queryKey: ['active-clients', page, size],
    queryFn: () => fetchActiveClients(page || 0, size || 10)
  })
}