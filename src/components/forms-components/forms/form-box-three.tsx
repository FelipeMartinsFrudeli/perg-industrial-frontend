import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InputField } from "../form-fields";

export function FormBoxThree({ form }: any) {

    return (
        <div className="container grid grid-cols-12 flex items-center gap-4">
            <AccordionItem value="item-3" className="col-span-12">
                <AccordionTrigger>3 - DISPOSIÇÃO</AccordionTrigger>
                <hr />
                <AccordionContent className="mx-1 mt-4">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-12 sm:col-span-3 flex items-center">
                                    <label className="flex items-center space-x-2">
                                        <InputField
                                            form={form}
                                            name="disposicao"
                                            label=""
                                            type="radio"
                                            value="sucatear"
                                        />
                                        <span className="ml-2">Sucatear</span>
                                    </label>
                                </div>
                                <div className="col-span-12 sm:col-span-3 flex items-center">
                                    <label className="flex items-center space-x-2">
                                        <InputField
                                            form={form}
                                            name="disposicao"
                                            label=""
                                            type="radio"
                                            value="retrabalho"
                                        />
                                        <span className="ml-2">Retrabalho</span>
                                    </label>
                                </div>
                                <div className="col-span-12 sm:col-span-3 flex items-center">
                                    <label className="flex items-center space-x-2">
                                        <InputField
                                            form={form}
                                            name="disposicao"
                                            label=""
                                            type="radio"
                                            value="devolver"
                                        />
                                        <span className="ml-2">Devolver</span>
                                    </label>
                                </div>
                                <div className="col-span-12 sm:col-span-3 flex items-center">
                                    <label className="flex items-center space-x-2">
                                        <InputField
                                            form={form}
                                            name="disposicao"
                                            label=""
                                            type="radio"
                                            value="naoAplicavel"
                                        />
                                        <span className="ml-2">Não Aplicável</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </div>
    );
}
