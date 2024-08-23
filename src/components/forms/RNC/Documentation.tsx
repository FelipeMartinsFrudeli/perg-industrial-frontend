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
                </>
            )}
        </>
    );
}

export default Documetation;
