import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { InputField, SelectTwoField, TextAreaField } from "./form-fields"
import { useState } from "react"

export function FormBoxTwo({ form }: any) {
    const [showContentReason, setShowContentReason] = useState(false);

    const handleSelectChange = ( value : string) => {
        setShowContentReason(value === 'sim')
    }
    return (
        <>
            <div className="container grid grid-cols-12 flex items-center gap-4">

                <AccordionItem value="item-2" className="col-span-12">
                    <AccordionTrigger>2 - AÇÃO DE CONTENÇÃO</AccordionTrigger>
                    <hr />
                    <AccordionContent className="w-auto mx-1 items-center flex grid grid-cols-12 gap-10 mt-4">

                        <p className="col-span-8 align-middle h-5.5">Há produto ou processo que necessite estender a ação de contenção?</p>
                        <SelectTwoField form={form} name="selectContencao" style="col-span-4" placeholder="Selecione uma opção" firstValue="sim" firstSelect="Sim" secondValue="nao" secondSelect="Não" onSelectChange={handleSelectChange} />

                        {showContentReason && (
                            <>
                                <TextAreaField form={form} name="contencao" style="col-span-12" label="Quais?" placeholder="Digite aqui" />
                            </>
                        )}


                    </AccordionContent>
                </AccordionItem>
            </div>
        </>
    )
}