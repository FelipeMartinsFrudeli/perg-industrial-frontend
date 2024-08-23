import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useFormContext } from "react-hook-form";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName


type RadioOption = {
  id: number;
  name: string;
  label: string;
};

type RadioFieldProps = {
  name: string;
  options: RadioOption[];
};

export function RadioField({ name, options }: RadioFieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="col-span-12 grid grid-cols-12 gap-2 items-center space-y-0">
          <FormControl>
            <RadioGroup
              value={field.value || ""}
              onValueChange={field.onChange}
              className="col-span-12 grid grid-cols-12 gap-2 items-center space-y-0"
            >
              {options.map((option) => (
                <FormItem
                  key={option.id}
                  className="col-span-3 space-y-0 space-x-3 align-middle"
                >
                  <FormControl>
                    <RadioGroupItem value={option.name} />
                  </FormControl>
                  <FormLabel className="font-normal w-2/12">
                    {option.label}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage className="col-span-12 w-64" />
        </FormItem>
      )}
    />
  );
}

export { RadioGroup, RadioGroupItem }
