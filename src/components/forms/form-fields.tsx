import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"

export function InputField({ form, name, style, label, placeholder, type }: any) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={style}>
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

export function TextAreaField({ form, name, style, label, placeholder }: any) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={style}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Textarea placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export function SelectTwoField({ form, name, style, placeholder, firstValue, secondValue, firstSelect, secondSelect, onSelectChange}: any) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={style}>
                    <Select onValueChange={(value : string) => {
                        field.onChange(value);
                        onSelectChange(value);
                    }} defaultValue={field.value }>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value={firstValue}>{firstSelect}</SelectItem>
                            <SelectItem value={secondValue}>{secondSelect}</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}