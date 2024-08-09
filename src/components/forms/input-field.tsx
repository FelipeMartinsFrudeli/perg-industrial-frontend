import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function InputField({ control, name, col_span, label, placeholder, type }:any) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={col_span}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} {...field} type={type} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}