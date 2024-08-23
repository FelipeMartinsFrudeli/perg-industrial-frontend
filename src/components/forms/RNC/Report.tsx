import { useState } from 'react';
import { InputField } from "@/components/ui/input";
import SelectTwoField from "@/components/ui/select";

function Report() {
    const [showContentReason, setShowContentReason] = useState<string | null>(null);

    const handleSelectChange = (value: string) => {
        setShowContentReason(value);
    };

    return (
        <>
            <p className="col-span-6 align-middle h-6">
                RNC pode ser encerrada?
            </p>
            <SelectTwoField
                name="selectAtualizados"
                className="col-span-3"
                placeholder="Selecione uma opção"
                firstValue="sim"
                firstSelect="Sim"
                secondValue="nao"
                secondSelect="Não"
                onSelectChange={handleSelectChange}
            />

            {showContentReason === 'nao' && (
                <InputField
                    name="nao"
                    label="Por que não?"
                    placeholder="Explique por que a RNC não pode ser encerrada"
                    className="col-span-12"
                />
            )}

            {showContentReason === 'sim' && (
                <>
                    <InputField
                        name="responsavel"
                        label="Responsável pelo encerramento"
                        placeholder="Nome do responsável"
                        className="col-span-6"
                    />

                    <InputField
                        name="dataVerificacao"
                        label="Data de verificação"
                        placeholder="Data de verificação"
                        className="col-span-6"
                        type="date"
                    />
                </>
            )}
        </>
    );
}

export default Report;
