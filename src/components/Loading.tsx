import { LoaderCircle } from 'lucide-react'

const Loading = () => {
  return (
    <div className='z-50 absolute inset-0 w-full h-screen flex justify-center items-center bg-white'>
      <LoaderCircle className='animate-spin h-[120px] w-[120px]' color='#0038FF'/>
    </div>
  )
}

export default Loading