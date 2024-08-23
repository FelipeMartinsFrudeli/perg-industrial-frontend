import SelectTwoField from "@/components/ui/select";
import { InputField } from "@/components/ui/input";
import { useState } from "react";

function Documetation() {
    const [showContentReason, setShowContentReason] = useState(false);

    const handleSelectChange = (value: string) => {
        setShowContentReason(value === 'sim')
    }
    return (
        <>
            <p className="col-span-6 align-middle h-5.5">Foram atualizados documentos ( Check list, desenhos, Its, FMEA, Plano de Controle )?</p>
            <SelectTwoField  name="selectAtualizados" className="col-span-3" placeholder="Selecione uma opção" firstValue="sim" firstSelect="Sim" secondValue="nao" secondSelect="Não" onSelectChange={handleSelectChange} />

            {showContentReason && (
                <>
                     <InputField name="atualizado" label="Se sim, quais?" placeholder="Digite quais foram aqui" className="col-span-12"/>

                     <InputField name="producao" label="Produção" placeholder="Digite a localização da produção aqui" className="col-span-6" />
                     <InputField name="qtd" label="Quantidade" placeholder="Digite a quantidade aqui" className="col-span-6" />

                     <InputField name="recebimento" label="Recebimento" placeholder="Digite a localização do recebimento aqui" className="col-span-6" />
                     <InputField name="qtd" label="Quantidade" placeholder="Digite a quantidade aqui" className="col-span-6" />

                     <InputField name="expedicao" label="Expedicao" placeholder="Digite a localização da expedição aqui" className="col-span-6" />
                     <InputField name="qtd" label="Quantidade" placeholder="Digite a quantidade aqui" className="col-span-6" />

                     <InputField name="estoque" label="Estoque" placeholder="Digite a localização do estoque aqui" className="col-span-6" />
                     <InputField name="qtd" label="Quantidade" placeholder="Digite a quantidade aqui" className="col-span-6" />

                     <InputField name="transito" label="Trânsito" placeholder="Digite a localização do trânsito" className="col-span-6" />
                     <InputField name="qtd" label="Quantidade" placeholder="Digite a quantidade aqui" className="col-span-6" />

                     <InputField name="fornecedor" label="Fornecedor" placeholder="Digite a localização do fornecedor aqui" className="col-span-6" />
                     <InputField name="qtd" label="Quantidade" placeholder="Digite a quantidade aqui" className="col-span-6" />

                     <InputField name="cliente" label="Cliente" placeholder="Digite a localização do cliente" className="col-span-6" />
                     <InputField name="qtd" label="Quantidade" placeholder="Digite a quantidade aqui" className="col-span-6" />

                     <InputField name="pecasdecampo" label="Peças em Campo" placeholder="Digite a localização das peças em campo" className="col-span-6" />
                     <InputField name="qtd" label="Quantidade" placeholder="Digite a quantidade aqui" className="col-span-6" />
                </>
            )}
        </>
    );
}

export default Documetation;
