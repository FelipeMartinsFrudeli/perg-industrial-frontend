// import { RouterProvider } from 'react-router-dom'
// import { router } from './router'
// import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { Register_RNC } from './components/Form-structure'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Register_RNC />
    </QueryClientProvider>
  )
}

export default App
