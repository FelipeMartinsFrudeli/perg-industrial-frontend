import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { InputField, SelectTwoField, TextAreaField } from "../form-fields"
import { useState } from "react"

export function FormBoxEight({ form }: any) {
    const [showContentReason, setShowContentReason] = useState(false);

    const handleSelectChange = (value: string) => {
        setShowContentReason(value === 'nao')
    }
    return (
        <>
            <div className="container grid grid-cols-12 flex items-center gap-4">

                <AccordionItem value="item-11" className="col-span-12">
                    <AccordionTrigger>8 - FECHAMENTO DO RELATÓRIO</AccordionTrigger>
                    <hr />
                    <AccordionContent className="w-auto mx-1 items-center flex grid grid-cols-12 gap-6 mt-4">

                        <p className="col-span-3 align-middle h-5.5">RNC pode ser encerrada?</p>
                        <SelectTwoField form={form} name="selectEncerramento" style="col-span-4" placeholder="Selecione uma opção" firstValue="sim" firstSelect="Sim" secondValue="nao" secondSelect="Não" onSelectChange={handleSelectChange} />

                        {showContentReason && (
                            <>
                                <TextAreaField form={form} name="encerramento" style="col-span-12" label="Porque não?" placeholder="Digite do porque aqui" />
                            </>
                        )}

                        <InputField form={form} name="responsavel" style="col-span-6" label="Responsavel pelo encerramento" placeholder="Digite o responsavel aqui" type="text" />

                        <InputField form={form} name="verificacao" style="col-span-6" label="Data da verificação" placeholder="Digite a data aqui" type="date" />

                    </AccordionContent>
                </AccordionItem>
            </div>
        </>
    )
}