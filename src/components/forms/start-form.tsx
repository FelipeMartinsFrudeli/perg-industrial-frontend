import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import { InputField } from "./input-field"

const formSchema = z.object({
    numberRNC: z.string().min(2, {
        message: "O Número RNC deve ter no mínimo 10 dígitos.",
    }),
    origem: z.string().min(2, {
        message: "A Origem deve ser digitada.",
    }),
    data: z.string().min(2, {
        message: "A Origem deve ser digitada.",
    }),
    setorCausa: z.string().min(2, {
        message: "A Origem deve ser digitada.",
    }),
})

export function StartForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            numberRNC: "",
            origem: "",
            data: "",
            setorCausa: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <>
            <div className="container-xl mx-auto grid grid-cols-12 flex items-center gap-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pt-14 col-span-10 col-start-2">
                        <div className="container mx-auto grid grid-cols-12 flex items-center gap-10">

                            <InputField control={form.control} name="numberRNC" col_span="col-span-6" label="Número RNC" placeholder="Digite o seu número aqui" type="text"/>

                            <InputField control={form.control} name="origem" col_span="col-span-6" label="Origem" placeholder="Digite a origem aqui" />

                            <InputField control={form.control} name="data" col_span="col-span-6" label="Data" placeholder="Digite a data aqui" />

                            <InputField control={form.control} name="setorCausa" col_span="col-span-6" label="Setor Causa" placeholder="Digite o setor aqui" />

                            <InputField control={form.control} name="prazo" col_span="col-span-4" label="Prazo para resposta" placeholder="Digite o prazo aqui" />

                            <InputField control={form.control} name="codigoPeca" col_span="col-span-4" label="Código da peça" placeholder="Digite o código aqui" />

                            <InputField control={form.control} name="quantidade" col_span="col-span-4" label="Quantidade" placeholder="Digite a quantidade aqui" />

                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}