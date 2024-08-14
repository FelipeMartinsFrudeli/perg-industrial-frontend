import { Title } from "./title.tsx";
import { StartForm } from "./forms/start-form.tsx";
import { FormBoxOne } from "./forms/form-box-one.tsx";
import { FormBoxTwo } from "./forms/form-box-two.tsx";
import { FormBoxThree } from "./forms/form-box-three.tsx";
import { FormBoxFour } from "./forms/form-box-four.tsx";
import '../../assets/styles/forms.css'
import '../../index.css'
import { FormSchema } from "@/schemas/form-schema.ts";


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form.tsx";
import { Accordion } from "@radix-ui/react-accordion";
import { Button } from "../ui/button.tsx";

export const Register_RNC = () => {

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            numberRNC: "",
            origem: "",
            data: "",
            setorCausa: "",
            prazo: "",
            codigoPeca: "",
            quantidade: "",
            tipo: "",
            clienteFornecedor: "",
            descricao: "",
            numeroRNCcliente: "",
            emitente: "",
            selectContencao: "",
            contencao: "",
            locProducao: "",
            qtdProducao: "",
            locRecebimento: "",
            qtdRecebimento: "",
            locExpedicao: "",
            qtdExpedicao: "",
            locEstoque: "",
            qtdEstoque: "",
            locTransito: "",
            qtdTransito: "",
            locFornecedor: "",
            qtdFornecedor: "",
            locCliente: "",
            qtdCliente: "",
            locPecasEmCampo: "",
            qtdPecasEmCampo: "",
            itemsDisposicao: ["1"],
        },
    });
    const onSubmit =  async (data: any) => {
        console.log(data);
    };

    return (
        <>
            <Title />
            <div className="container-xl mx-auto grid grid-cols-12 flex items-center gap-4">
                <div className="forms-box col-span-10 col-start-2 rounded-xl mb-20">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pt-14 pb-14 container-xl mx-auto grid grid-cols-12 flex items-center gap-4">
                            <StartForm form={form} />
                            <Accordion type="single" collapsible className="col-span-10 col-start-2">
                                <FormBoxOne form={form} />
                                <FormBoxTwo form={form} />
                                <FormBoxThree form={form}/>
                                <FormBoxFour form={form}/>
                            </Accordion>
                            <Button type="submit" className="col-span-2 col-start-6">Enviar</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}