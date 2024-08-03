import * as React from "react"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      'flex h-10 w-full px-3 py-2 rounded-lg text-sm',
      'border border-input bg-background ring-offset-background',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    ref={ref}
    {...props}
  />
))
Input.displayName = "Input"

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <div
    className={cn(
      'relative flex items-center h-10 rounded-lg text-sm disabled:opacity-50',
      'border border-input bg-background ring-offset-background',
      'text-gray-400 focus-within:text-gray-600',
      className
    )}
  >
    <Search className="absolute ml-2 size-5 pointer-events-none" />
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex-1 px-3 py-2 bg-transparent rounded-lg pl-10 text-black',
        'placeholder:text-muted-foreground ring-offset-background disabled:cursor-not-allowed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      {...props}
    />
  </div>
))
SearchInput.displayName = "SearchInput"

export { Input, SearchInput }