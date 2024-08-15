import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { InputField } from "../form-fields"


export function FormBoxFive({ form }: any) {

    return (
        <>
            <div className="container grid grid-cols-12 flex items-center gap-4">

                    <AccordionItem value="item-5" className="col-span-12">
                        <AccordionTrigger>5 - ANÁLISE DE CAUSA RAIZ ( REAL MOTIVO DA FALHA )</AccordionTrigger>
                        <hr/>
                        <AccordionContent className="w-auto mx-1 items-center flex grid grid-cols-12 gap-6 mt-4">

                        <InputField form={form} name="dataAnalise" style="col-span-6" label="Data da Análise" placeholder="Digite a data da análise aqui" type="date" />

                        <InputField form={form} name="analise" style="col-span-6" label="Análise" placeholder="Digite a análise aqui" type="text" />

                        </AccordionContent>
                    </AccordionItem>
            </div>
        </>
    )
}