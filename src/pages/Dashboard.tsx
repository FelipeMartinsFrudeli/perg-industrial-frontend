import { useUser } from "@/hooks/useUser";
import { Error } from "@/pages/Error";

export function Dashboard() {
  
  const { data, isLoading } = useUser()
  const user = data?.data
  const role = user?.role

  return (
    <>
      {(!isLoading && !role) && <Error />}

      {role == 1 && <div></div>}
      {role == 2 && <div></div>}
      {role == 3 && <div></div>}
    </>
  )
}