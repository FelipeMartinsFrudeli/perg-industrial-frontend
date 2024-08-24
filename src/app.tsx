// import { RouterProvider } from 'react-router-dom'
// import { router } from './router'
// import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
// import RNC from './components/forms/RNC/index.tsx'
import './assets/styles/font.css'
import Login from './components/login.tsx'
import Register from './components/Register.tsx'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <RNC /> */}
      {/* <Login /> */}
      <Register />
    </QueryClientProvider>
  )
}

export default App
