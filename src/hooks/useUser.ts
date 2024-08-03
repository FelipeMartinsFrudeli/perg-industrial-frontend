import { type RegisterUserData, fetchUser, postRegisterUser } from "@/api/user"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser
  })
}

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data: RegisterUserData) => postRegisterUser(data)
  })
}