// import { RouterProvider } from 'react-router-dom'
// import { router } from './router'
// import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
    </QueryClientProvider>
  )
}

export default App
