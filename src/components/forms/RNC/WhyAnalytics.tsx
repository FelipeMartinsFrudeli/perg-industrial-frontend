import { useState } from 'react';
import { InputField } from '@/components/ui/input';
import { Plus, Trash2 } from 'lucide-react';

function WhyAnalytics() {
    const [linha, setLinha] = useState([{ falha: '', falhaDetectada: '', falhaPrevista: '' }]);

    function adicionarLinha() {
        setLinha([...linha, { falha: '', falhaDetectada: '', falhaPrevista: '' }]);
    }

    function removerLinha(index: number) {
        const novasLinhas = [...linha];
        novasLinhas.splice(index, 1);
        setLinha(novasLinhas);
    }

    return (

        <div className="col-span-12 container grid grid-cols-12 gap-4">
            {linha.map((row, index) => (
                <div key={index} className="col-span-12 grid grid-cols-12 gap-4 mb-4">
                    <div className="col-span-12 sm:col-span-4 items-center">
                        <InputField
                            name={`falha-${index}`}
                            label="Por que houve a falha?"
                            placeholder={`Digite aqui a ${index + 1}° falha`}
                            className="mt-2"
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-4 items-center">
                        <InputField
                            name={`falhaDetectada-${index}`}
                            label="Por que a falha não foi detectada?"
                            placeholder={`Digite aqui a ${index + 1}° falha`}
                            className="mt-2"
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-4 items-center">
                        <InputField
                            name={`falhaPrevista-${index}`}
                            label="Por que a falha não foi prevista?"
                            placeholder={`Digite aqui a ${index + 1}° falha`}
                            className="mt-2"
                        />
                    </div>
                </div>
            ))}

            <div className="col-span-6 col-start-7 mt-4 space-x-4">
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
    );
}


export default WhyAnalytics;