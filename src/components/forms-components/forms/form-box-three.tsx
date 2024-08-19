import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RadioField } from "../form-fields";
import { radioLib } from "@/lib/radio-lib";

export function FormBoxThree() {
    return (
        <div className="container grid grid-cols-12 items-center gap-4">
            <AccordionItem value="item-3" className="col-span-12">
                <AccordionTrigger>3 - DISPOSIÇÃO</AccordionTrigger>
                <hr />
                <AccordionContent className="mx-1 mt-4">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <div className="grid grid-cols-12 gap-4">
                                <RadioField name="itemsDisposicao" options={radioLib}/>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </div>
    );
}
