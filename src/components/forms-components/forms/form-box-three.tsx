import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { itemsDisposicao } from "@/lib/checkbox-values"
import { CheckboxField } from "../form-fields"


export function FormBoxThree({ form }: any) {
    const items = itemsDisposicao();

    return (
        <>
            <div className="container grid grid-cols-12 flex items-center gap-4">

                    <AccordionItem value="item-3" className="col-span-12">
                        <AccordionTrigger>3 - DISPOSIÇÃO</AccordionTrigger>
                        <hr/>
                        <AccordionContent className="mx-1 mt-4">

                            <CheckboxField form={form} name="itemsDisposicao" style="flex items-center space-y-0 space-x-2" objects={items}/>

                        </AccordionContent>
                    </AccordionItem>
            </div>
        </>
    )
}