import * as React from "react"
import { Input } from "./input"

export interface InputSuffixProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix: React.ReactNode
}

const InputSuffix = React.forwardRef<HTMLInputElement, InputSuffixProps>(
  ({ suffix, className, ...props }, ref) => {
    return (
      <div className="flex gap-2 items-center">
        <Input className={className} {...props} ref={ref} />
        {suffix}
      </div>
    )
  }
)
InputSuffix.displayName = "Input"

export { InputSuffix }