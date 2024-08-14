import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { InputField } from "../form-fields"


export function FormBoxFour({ form }: any) {

    return (
        <>
            <div className="container grid grid-cols-12 flex items-center gap-4">

                    <AccordionItem value="item-4" className="col-span-12">
                        <AccordionTrigger>4 - IMAGEM DA PEÇA NÃO CONFORME</AccordionTrigger>
                        <hr/>
                        <AccordionContent className="mx-1 mt-4">

                        <InputField form={form} name="imagemNaoConforme" style="col-span-6" label="" placeholder="Selecione uma imagem" type="file" />

                        </AccordionContent>
                    </AccordionItem>
            </div>
        </>
    )
}