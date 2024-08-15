import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TextAreaField } from "../form-fields"
import React from "react";


export function FormBoxSix({ form }: any) {
    const items = [];
    for (let index = 1; index <= 5; index++) {
        items.push(
            <React.Fragment key={index}>
                <TextAreaField form={form} name={`item${index}`} style="col-span-2" label="" placeholder="Digite aqui" />
                <TextAreaField form={form} name={`correcao${index}`} style="col-span-2" label="" placeholder="Digite aqui" />
                <TextAreaField form={form} name={`responsavel${index}`} style="col-span-2" label="" placeholder="Digite aqui" />
                <TextAreaField form={form} name={`prazo${index}`} style="col-span-2" label="" placeholder="Digite aqui" />
                <TextAreaField form={form} name={`conclusao${index}`} style="col-span-2" label="" placeholder="Digite aqui" />
                <TextAreaField form={form} name={`evidencias${index}`} style="col-span-2" label="" placeholder="Digite aqui" />
            </React.Fragment>
        )
    }
    return (
        <>
            <div className="container grid grid-cols-12 flex items-center gap-4">

                <AccordionItem value="item-9" className="col-span-12">
                    <AccordionTrigger>6 - AÇÕES CORRETIVAS</AccordionTrigger>
                    <hr />
                    <AccordionContent className="w-auto mx-1 items-center flex grid grid-cols-12 gap-6 mt-4">

                        <p className="col-span-2 font-bold text-center text-lg mt-4">ITEM</p>
                        <p className="col-span-2 font-bold text-center text-lg mt-4">AÇÃO DE CORREÇÃO</p>
                        <p className="col-span-2 font-bold text-center text-lg mt-4">RESPONSÁVEL</p>
                        <p className="col-span-2 font-bold text-center text-lg mt-4">PRAZO</p>
                        <p className="col-span-2 font-bold text-center text-lg mt-4">CONCLUSÃO</p>
                        <p className="col-span-2 font-bold text-center text-lg mt-4">EVIDENCIAS</p>

                        {items}

                    </AccordionContent>
                </AccordionItem>
            </div>
        </>
    )
}