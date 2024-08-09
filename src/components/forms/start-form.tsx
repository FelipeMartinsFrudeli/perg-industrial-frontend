import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import { InputField } from "./input-field"
import { FormBoxOne } from "./form-box-one.tsx";


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
    prazo: z.string().min(2, {
        message: "A Origem deve ser digitada.",
    }),
    codigoPeca: z.string().min(2, {
        message: "A Origem deve ser digitada.",
    }),
    quantidade: z.string().min(2, {
        message: "A Origem deve ser digitada.",
    }),
    tipo: z.string().min(2, {
        message: "A Origem deve ser digitada.",
    }),
    clienteFornecedor: z.string().min(2, {
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
            prazo: "",
            codigoPeca: "",
            quantidade: "",
            tipo: "",
            clienteFornecedor: "",
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

                            <InputField control={form.control} name="numberRNC" style="col-span-6" label="Número RNC" placeholder="Digite o seu número aqui" type="number" />

                            <InputField control={form.control} name="origem" style="col-span-6" label="Origem" placeholder="Digite a origem aqui" type="text" />

                            <InputField control={form.control} name="data" style="col-span-6" label="Data" placeholder="Digite a data aqui" type="date" />

                            <InputField control={form.control} name="setorCausa" style="col-span-6" label="Setor Causa" placeholder="Digite o setor aqui" type="text" />

                            <InputField control={form.control} name="prazo" style="col-span-4" label="Prazo para resposta" placeholder="Digite o prazo aqui" type="text" />

                            <InputField control={form.control} name="codigoPeca" style="col-span-4" label="Código da peça" placeholder="Digite o código aqui" type="number" />

                            <InputField control={form.control} name="quantidade" style="col-span-4" label="Quantidade" placeholder="Digite a quantidade aqui" type="number" />

                            <InputField control={form.control} name="tipo" style="col-span-6" label="Tipo" placeholder="Digite o tipo aqui" type="text" />

                            <InputField control={form.control} name="clienteFornecedor" style="col-span-6" label="Cliente / Fornecedor" placeholder="Digite o cliente ou fornecedor aqui" type="text" />

                        </div>

                        <FormBoxOne />
                    </form>
                </Form>
            </div>
        </>
    )
}