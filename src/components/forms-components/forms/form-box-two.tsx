import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { InputField, SelectTwoField, TextAreaField } from "../form-fields"
import { useState } from "react"

export function FormBoxTwo({ form }: any) {
    const [showContentReason, setShowContentReason] = useState(false);

    const handleSelectChange = (value: string) => {
        setShowContentReason(value === 'sim')
    }
    return (
        <>
            <div className="container grid grid-cols-12 items-center gap-4">

                <AccordionItem value="item-2" className="col-span-12">
                    <AccordionTrigger>2 - AÇÃO DE CONTENÇÃO</AccordionTrigger>
                    <hr />
                    <AccordionContent className="w-auto mx-1 items-center grid grid-cols-12 gap-6 mt-4">

                        <p className="col-span-7 align-middle h-5.5">Há produto ou processo que necessite estender a ação de contenção?</p>
                        <SelectTwoField form={form} name="selectContencao" style="col-span-3" placeholder="Selecione uma opção" firstValue="sim" firstSelect="Sim" secondValue="nao" secondSelect="Não" onSelectChange={handleSelectChange} />

                        {showContentReason && (
                            <>
                                <TextAreaField form={form} name="contencao" style="col-span-12" label="Quais?" placeholder="Digite aqui" />
                            </>
                        )}

                        <p className="col-span-8 font-bold text-center text-lg mt-4">Localização</p>
                        <p className="col-span-4 font-bold text-center text-lg mt-4">Quantidade</p>

                        <InputField form={form} name="locProducao" style="col-span-8" label="Produção" placeholder="Digite a localização de produção aqui" type="text" />
                        <InputField form={form} name="qtdProducao" style="col-span-4 mt-5" label="" placeholder="Digite a quantidade aqui" type="number" />

                        <InputField form={form} name="locRecebimento" style="col-span-8" label="Recebimento" placeholder="Digite a localização do recebimento aqui" type="text" />
                        <InputField form={form} name="qtdRecebimento" style="col-span-4 mt-5" label="" placeholder="Digite a quantidade aqui" type="number" />

                        <InputField form={form} name="locExpedicao" style="col-span-8" label="Expedição" placeholder="Digite a localização de expedição aqui" type="text" />
                        <InputField form={form} name="qtdExpedicao" style="col-span-4 mt-5" label="" placeholder="Digite a quantidade aqui" type="number" />

                        <InputField form={form} name="locEstoque" style="col-span-8" label="Estoque" placeholder="Digite a localização do estoque aqui" type="text" />
                        <InputField form={form} name="qtdEstoque" style="col-span-4 mt-5" label="" placeholder="Digite a quantidade aqui" type="number" />

                        <InputField form={form} name="locTransito" style="col-span-8" label="Trânsito" placeholder="Digite a localização de trânsito aqui" type="text" />
                        <InputField form={form} name="qtdTransito" style="col-span-4 mt-5" label="" placeholder="Digite a quantidade aqui" type="number" />

                        <InputField form={form} name="locFornecedor" style="col-span-8" label="Fornecedor" placeholder="Digite a localização do fornecedor aqui" type="text" />
                        <InputField form={form} name="qtdFornecedor" style="col-span-4 mt-5" label="" placeholder="Digite a quantidade aqui" type="number" />

                        <InputField form={form} name="locCliente" style="col-span-8" label="Cliente" placeholder="Digite a localização do cliente aqui" type="text" />
                        <InputField form={form} name="qtdCliente" style="col-span-4 mt-5" label="" placeholder="Digite a quantidade aqui" type="number" />

                        <InputField form={form} name="locPecasEmCampo" style="col-span-8" label="Peças em Campo" placeholder="Digite a localização das peças em campo aqui" type="text" />
                        <InputField form={form} name="qtdPecasEmCampo" style="col-span-4 mt-5" label="" placeholder="Digite a quantidade aqui" type="number" />


                    </AccordionContent>
                </AccordionItem>
            </div>
        </>
    )
}