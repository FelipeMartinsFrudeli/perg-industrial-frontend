import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { InputField } from "../form-fields"


export function FormBoxFiveOne({ form }: any) {

    return (
        <>
            <div className="container grid grid-cols-12 flex items-center gap-4">

                <AccordionItem value="item-6" className="col-span-12">
                    <AccordionTrigger>5.1 - DIAGRAMA DE CAUSA E EFEITO</AccordionTrigger>
                    <hr />
                    <AccordionContent className="w-auto mx-1 items-center flex grid grid-cols-12 gap-6 mt-4">

                        <InputField form={form} name="maoDeObra" style="col-span-6" label="Mão de Obra" placeholder="Digite a mão de obra aqui" type="text" />

                        <InputField form={form} name="metodoDeTrabalho" style="col-span-6" label="Método de Trabalho" placeholder="Digite o método de trabalho aqui" type="text" />

                        <InputField form={form} name="maquina" style="col-span-6" label="Máquina" placeholder="Digite a máquina aqui" type="text" />

                        <InputField form={form} name="meioAmbiente" style="col-span-6" label="Meio Ambiente" placeholder="Digite o meio ambiente aqui" type="text" />

                        <InputField form={form} name="materiaPrima" style="col-span-6" label="Matéria Prima" placeholder="Digite a matéria prima aqui" type="text" />

                        <InputField form={form} name="medicao" style="col-span-6" label="Medição" placeholder="Digite a medicao aqui" type="text" />

                    </AccordionContent>
                </AccordionItem>
            </div>
        </>
    )
}