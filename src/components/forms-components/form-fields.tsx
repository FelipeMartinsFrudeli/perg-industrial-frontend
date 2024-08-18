import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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

export function RadioField({ form, name, objects }: any) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="grid grid-cols-12 gap-2 items-center space-y-0">
                    <FormControl>
                        <RadioGroup
                            value={field.value || ""}
                            onValueChange={field.onChange}
                            className="flex flex-row space-x-32"
                        >
                            {objects.map((object: any) => (
                                <FormItem key={object.id} className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value={object.name} />
                                    </FormControl>
                                    <FormLabel className="font-normal w-2/12">
                                        {object.label}
                                    </FormLabel>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage className="col-span-12 w-64"/>
                </FormItem>
            )}
        />
    )
}
