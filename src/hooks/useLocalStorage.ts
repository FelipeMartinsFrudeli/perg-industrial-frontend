import { useEffect, useState } from "react"

type LocalStorageProps<T> = {
  key: string,
  defaultValue: T
}

export default function useLocalStorage<T>({
  key,
  defaultValue
}: LocalStorageProps<T>) {
  
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue != null ? (JSON.parse(storedValue) as T) : defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}