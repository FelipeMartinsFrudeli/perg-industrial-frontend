import * as React from "react"
import { InputSuffix } from "./input-sufix"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <InputSuffix
        type={showPassword ? "text" : "password"}
        suffix={showPassword ? (
          <EyeIcon onClick={() => setShowPassword(false)} />
        ) : (
          <EyeOffIcon onClick={() => setShowPassword(true)} />
        )}
        className={className}
        {...props}
        ref={ref}
      />
    )
  }
)
PasswordInput.displayName = "Input"

export { PasswordInput }