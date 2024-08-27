import { InputField } from "../form-fields"


export function StartForm({ form }: any) {
    return (
        <>
            <div className="col-span-10 col-start-2 items-center gap-4">

                <div className="container mx-auto grid grid-cols-12 items-center gap-10">

                    <InputField form={form} name="numberRNC" style="col-span-6" label="Número RNC" placeholder="Digite o seu número aqui" type="number" />

                    <InputField form={form} name="origem" style="col-span-6" label="Origem" placeholder="Digite a origem aqui" type="text" />

                    <InputField form={form} name="data" style="col-span-6" label="Data" placeholder="Digite a data aqui" type="date" />

                    <InputField form={form} name="setorCausa" style="col-span-6" label="Setor Causa" placeholder="Digite o setor aqui" type="text" />

                    <InputField form={form} name="prazo" style="col-span-4" label="Prazo para resposta" placeholder="Digite o prazo aqui" type="text" />

                    <InputField form={form} name="codigoPeca" style="col-span-4" label="Código da peça" placeholder="Digite o código aqui" type="number" />

                    <InputField form={form} name="quantidade" style="col-span-4" label="Quantidade" placeholder="Digite a quantidade aqui" type="number" />

                    <InputField form={form} name="tipo" style="col-span-6" label="Tipo" placeholder="Digite o tipo aqui" type="text" />

                    <InputField form={form} name="clienteFornecedor" style="col-span-6" label="Cliente / Fornecedor" placeholder="Digite o cliente ou fornecedor aqui" type="text" />

                </div>
            </div>
        </>
    )
}