import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { FormControl } from './ui/form'

export type Option = {
  label: string
  value: any
}

export interface BasicSelectProps {
  className?: string
  isLoading?: boolean
  placeholder?: string
  label?: string
  field?: any
  options?: any[]
  defaultValue?: any
}

const BasicSelect = ({ defaultValue, className, ...props }: BasicSelectProps) => (
  <Select
    onValueChange={props.field?.onChange}
    defaultValue={defaultValue || props.field?.value}
  >
    {props.field ? (
      <FormControl>
        <SelectTrigger className={cn("min-w-[300px]", className)} >
          <SelectValue placeholder={props.placeholder || ''} />
        </SelectTrigger>
      </FormControl>
    ) : (
      <SelectTrigger className={cn("min-w-[300px]", className)} >
        <SelectValue placeholder={props.placeholder || ''} />
      </SelectTrigger>
    )}

    <SelectContent>
      <SelectGroup>
        {props.label && (
          <SelectLabel>{props.label}</SelectLabel>
        )}

        {!props.options || props.options.length == 0 && (
          <SelectLabel>Nenhuma opção disponível...</SelectLabel>
        )}

        {props.isLoading && (
          <SelectLabel>Carregando, aguarde...</SelectLabel>
        )}

        {props.options?.map((option, idx) => (
          <SelectItem
            key={idx}
            className="cursor-pointer focus:bg-slate-200"
            value={option?.[0]?.toString() || option}
          >
            {option?.[1] || option}
          </SelectItem>
        ))}

      </SelectGroup>
    </SelectContent>
  </Select>
)

export default BasicSelect