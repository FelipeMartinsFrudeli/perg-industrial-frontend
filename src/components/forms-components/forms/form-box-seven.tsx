import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SelectTwoField } from "../form-fields"
import { useState } from "react";


export function FormBoxSeven({ form }: any) {
    const [showContentReason, setShowContentReason] = useState(false);

    const handleSelectChange = (value: string) => {
        setShowContentReason(value === 'sim')
    }
    return (
        <>
            <div className="container grid grid-cols-12 flex items-center gap-4">

                    <AccordionItem value="item-10" className="col-span-12">
                        <AccordionTrigger>7 - RISCOS E OPORTUNIDADES (R.O)</AccordionTrigger>
                        <hr/>
                        <AccordionContent className="w-auto mx-1 items-center flex grid grid-cols-12 gap-6 mt-4">

                        <p className="col-span-4 align-middle h-5.5">Necessário avaliação da matriz R.O?</p>
                        <SelectTwoField form={form} name="selectAtualizados" style="col-span-3" placeholder="Selecione uma opção" firstValue="sim" firstSelect="Sim" secondValue="nao" secondSelect="Não" onSelectChange={handleSelectChange} />


                        </AccordionContent>
                    </AccordionItem>
            </div>
        </>
    )
}