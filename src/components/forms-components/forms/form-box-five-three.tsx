import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SelectTwoField, TextAreaField } from "../form-fields"
import { useState } from "react";


export function FormBoxFiveThree({ form }: any) {
    const [showContentReason, setShowContentReason] = useState(false);

    const handleSelectChange = (value: string) => {
        setShowContentReason(value === 'sim')
    }
    return (
        <>
            <div className="container grid grid-cols-12 flex items-center gap-4">

                    <AccordionItem value="item-8" className="col-span-12">
                        <AccordionTrigger>5.3 - DOCUMENTAÇÃO</AccordionTrigger>
                        <hr/>
                        <AccordionContent className="w-auto mx-1 items-center flex grid grid-cols-12 gap-6 mt-4">

                        <p className="col-span-7 align-middle h-5.5">Foram atualizados documentos ( Check list, desenhos, Its, FMEA, Plano de Controle )?</p>
                        <SelectTwoField form={form} name="selectAtualizados" style="col-span-3" placeholder="Selecione uma opção" firstValue="sim" firstSelect="Sim" secondValue="nao" secondSelect="Não" onSelectChange={handleSelectChange} />

                        {showContentReason && (
                            <>
                                <TextAreaField form={form} name="atualizados" style="col-span-12" label="Quais?" placeholder="Digite aqui" />
                            </>
                        )}

                        </AccordionContent>
                    </AccordionItem>
            </div>
        </>
    )
}