import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { InputField, TextAreaField } from "../form-fields"

export function FormBoxOne({ form }: any) {
    return (
        <>
            <div className="container grid grid-cols-12 flex items-center gap-4">

                    <AccordionItem value="item-1" className="col-span-12">
                        <AccordionTrigger>1 - DETALHES DA NÃO CONFORMIDADE</AccordionTrigger>
                        <hr/>
                        <AccordionContent className="w-auto mx-1 grid grid-cols-12 gap-10 mt-4">

                            <TextAreaField form={form} name="descricao" style="col-span-12" label="Descrição" placeholder="Digite a sua descrição aqui" />

                            <InputField form={form} name="numeroRNCcliente" style="col-span-6" label="Número RNC Cliente" placeholder="Digite o número aqui" type="number" />

                            <InputField form={form} name="emitente" style="col-span-6" label="Emitente" placeholder="Digite o emitente aqui" type="text" />

                        </AccordionContent>
                    </AccordionItem>
            </div>
        </>
    )
}