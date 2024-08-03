import { Input, SearchInput } from "@/components/ui/input";
import BasicSelect from "@/components/BasicSelect";
import CheckboxList from "@/components/CheckboxList";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField } from '../ui/form';
import { Button } from '../ui/button';

const FormSchema = z.object({
  "input": z.string(),
  "search-input": z.string(),
  "basic-select": z.string(),
  "checkbox-list": z.array(z.string())
})

type FormType = z.infer<typeof FormSchema>

function TestForm() {
  function onSubmit(data: FormType) {
    console.log(data);
  }

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      "input": '',
      "search-input": '',
      "basic-select": '0',
      "checkbox-list": ['3']
    },
  })

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          <FormField control={form.control} name="input"
            render={({ field }) => (
              <Input {...field} />
            )}
          />

          <FormField control={form.control} name="search-input"
            render={({ field }) => (
              <SearchInput {...field} />
            )}
          />

          <FormField control={form.control} name="basic-select" defaultValue='item'
            render={({ field }) => (
              <BasicSelect field={field} options={['item', 'item2']} />
            )}
          />
            
          <CheckboxList name="checkbox-list" form={form} items={[
            { id: '1', label: 'test' },
            { id: '2', label: 'test' },
            { id: '3', label: 'test' },
          ]} />
          
          
          <Button type="submit">Submit</Button>
        </form>
      </Form>

    </div>
  )
}

export default TestForm
