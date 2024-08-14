import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
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

export function SelectTwoField({ form, name, style, placeholder, firstValue, secondValue, firstSelect, secondSelect, onSelectChange }: any) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={style}>
                    <Select onValueChange={(value: string) => {
                        field.onChange(value);
                        onSelectChange(value);
                    }} defaultValue={field.value}>
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

export function CheckboxField({ form, name, style, objects }: any) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={() => (
                <FormItem className="grid grid-cols-4 gap-2 items-center space-y-0">
                    {objects.map((object:any) => (
                        <FormField
                            key={object.id}
                            control={form.control}
                            name={name}
                            render={({ field }) => {                                
                                return (
                                    <FormItem
                                        key={object.id}
                                        className={style}
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value?.includes(object.id)}
                                                onCheckedChange={(checked) => {
                                                    return checked
                                                        ? field.onChange([...field.value, object.id])
                                                        : field.onChange(
                                                            field.value?.filter(
                                                                (value:any) => value !== object.id
                                                            )
                                                        )
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel className="ml-0 mt-0">{object.label}</FormLabel>
                                    </FormItem>
                                )
                            }}
                            />
                        ))}
                        <FormMessage />
                </FormItem>
            )}
        />
    )

}