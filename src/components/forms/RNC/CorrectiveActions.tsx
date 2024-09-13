import { InputField } from "@/components/ui/input";
import { useState } from "react";

import { Plus, Trash2 } from 'lucide-react';

function CorrectiveActions() {
    const [linha, setLinha] = useState([{ item: '', acaoCorrecao: '', responsavel: '', prazo: '', conslusao: '', evidencias: '' }]);

    function adicionarLinha() {
        setLinha([...linha, { item: '', acaoCorrecao: '', responsavel: '', prazo: '', conslusao: '', evidencias: '' }]);
    }

    function removerLinha(index: number) {
        const novasLinhas = [...linha];
        novasLinhas.splice(index, 1);
        setLinha(novasLinhas);
    }
    return (
        <>
            {linha.map((row, index) => (
                <div className="col-span-12 overflow-x-auto">
                    <div key={index} className="flex gap-6 min-w-max mb-2">
                        <div className="min-w-[300px]">
                            <InputField name={`item${index}`} label="Item" placeholder={`Digite o ${index + 1}° item aqui`} className="w-full" />
                        </div>
                        <div className="min-w-[300px]">
                            <InputField name={`acaoCorrecao${index}`} label="Ação de Correção" placeholder={`Digite a ${index + 1}° ação de correção aqui`}className="w-full" />
                        </div>
                        <div className="min-w-[300px]">
                            <InputField name={`responsavel${index}`} label="Responsável" placeholder={`Digite o ${index + 1}° responsável aqui`} className="w-full" />
                        </div>
                        <div className="min-w-[300px]">
                            <InputField name={`prazo${index}`} label="Prazo" placeholder={`Digite o ${index + 1}° prazo aqui`} className="w-full" />
                        </div>
                        <div className="min-w-[300px]">
                            <InputField name={`conslusao${index}`} label="Conclusão" placeholder={`Digite a ${index + 1}° conclusão aqui`} className="w-full" />
                        </div>
                        <div className="min-w-[300px]">
                            <InputField name={`evidencias${index}`} label="Evidências" placeholder={`Digite a ${index + 1}° evidências aqui`} className="w-full" />
                        </div>
                    </div>
                </div>
            ))}

            <div className="col-span-12">
                <div className="col-span-6 col-start-7 space-x-4">
                    <div className="flex justify-end space-x-4">
                        {linha.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removerLinha(linha.length - 1)}
                                className="bg-red-500 text-white px-10 space-x-3 space-y-0 py-2 items-center rounded flex hover:bg-red-600"
                            >
                                <div>Excluir último campo</div>
                                <Trash2 />
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={adicionarLinha}
                            className="bg-gray-400 text-white px-10 space-x-2 space-y-0 py-2 rounded hover:bg-gray-500 items-center flex"
                        >
                            <div>Adicionar novo campo</div>
                            <Plus />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CorrectiveActions;
