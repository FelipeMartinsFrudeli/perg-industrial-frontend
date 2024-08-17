import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InputField } from "../form-fields";

export function FormBoxSix({ form }: any) {
    return (
        <>
            <div className="container grid grid-cols-12 gap-4">

                <AccordionItem value="item-9" className="col-span-12">
                    <AccordionTrigger>6 - AÇÕES CORRETIVAS</AccordionTrigger>
                    <hr />
                    <AccordionContent className="w-full mx-1 mt-4">
                        <div className="overflow-x-scroll">
                            <div className="flex items-center gap-6 min-w-full">
                                <div className="min-w-[420px] mb-4">
                                    <p className="font-bold text-center text-lg mt-4">ITEM</p>
                                    <InputField
                                        form={form}
                                        name="item"
                                        label=""
                                        placeholder="Digite o item aqui"
                                        type="text"
                                    />
                                </div>
                                <div className="min-w-[420px] mb-4">
                                    <p className="font-bold text-center text-lg mt-4">AÇÃO DE CORREÇÃO</p>
                                    <InputField
                                        form={form}
                                        name="acaoCorretiva"
                                        label=""
                                        placeholder="Digite a ação corretiva aqui"
                                        type="text"
                                    />
                                </div>
                                <div className="min-w-[420px] mb-4">
                                    <p className="font-bold text-center text-lg mt-4">RESPONSÁVEL</p>
                                    <InputField
                                        form={form}
                                        name="responsavel"
                                        label=""
                                        placeholder="Digite o responsável aqui"
                                        type="text"
                                    />
                                </div>
                                <div className="min-w-[420px] mb-4">
                                    <p className="font-bold text-center text-lg mt-4">PRAZO</p>
                                    <InputField
                                        form={form}
                                        name="prazo"
                                        label=""
                                        placeholder="Digite o prazo aqui"
                                        type="date"
                                    />
                                </div>
                                <div className="min-w-[420px] mb-4">
                                    <p className="font-bold text-center text-lg mt-4">CONCLUSÃO</p>
                                    <InputField
                                        form={form}
                                        name="conclusao"
                                        label=""
                                        placeholder="Digite a conclusão aqui"
                                        type="text"
                                    />
                                </div>
                                <div className="min-w-[420px] mb-4">
                                    <p className="font-bold text-center text-lg mt-4">EVIDÊNCIAS</p>
                                    <InputField
                                        form={form}
                                        name="evidencias"
                                        label=""
                                        placeholder="Digite as evidências aqui"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </div>
        </>
    );
}
