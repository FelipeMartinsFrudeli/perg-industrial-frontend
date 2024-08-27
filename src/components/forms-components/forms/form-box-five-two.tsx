import { useState } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InputField } from "../form-fields";

export function FormBoxFiveTwo({ form }: any) {
  const [linha, setLinha] = useState([{ falha: '', falhaDetectada: '', falhaPrevista: '' }]);

  function adicionarLinha() {
    setLinha([...linha, { falha: '', falhaDetectada: '', falhaPrevista: '' }]);
  };

  function removerLinha(index: number) {
    const novasLinhas = [...linha];
    novasLinhas.splice(index, 1);
    setLinha(novasLinhas);
  };

  return (
    <div className="container grid grid-cols-12 gap-4">
      <AccordionItem value="item-5.2" className="col-span-12">
        <AccordionTrigger>5.2 - ANÁLISE DOS 5 PORQUÊS</AccordionTrigger>
        <hr />
        <AccordionContent className="mx-1 mt-4">
          {linha.map((row, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 mb-4">
              <div className="col-span-12 sm:col-span-4 flex flex-col items-center">
                <InputField
                  form={form}
                  name={`falha-${index}`}
                  label="Por que houve a falha?"
                  type="text"
                  placeholder={`Digite aqui a ${index+1}° falha`}
                  className="mt-2"
                />
              </div>
              <div className="col-span-12 sm:col-span-4 flex flex-col items-center">
                <InputField
                  form={form}
                  name={`falhaDetectada-${index}`}
                  label="Por que a falha não foi detectada?"
                  type="text"
                  placeholder={`Digite aqui a ${index+1}° falha`}
                  className="mt-2"
                />
              </div>
              <div className="col-span-12 sm:col-span-4 flex flex-col items-center">
                <InputField
                  form={form}
                  name={`falhaPrevista-${index}`}
                  label="Por que a falha não foi prevista?"
                  type="text"
                  placeholder={`Digite aqui a ${index+1}° falha`}
                  className="mt-2"
                />
              </div>
            </div>
          ))}
          
          <div className="flex justify-end mt-4 space-x-4">
            {linha.length > 1 && (
              <button
                type="button"
                onClick={() => removerLinha(linha.length - 1)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Excluir último campo
              </button>
            )}
            <button
              type="button"
              onClick={adicionarLinha}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Adicionar novo campo
            </button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
