import { useState } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InputField } from "../form-fields";

export function FormBoxSix({ form }: any) {
  const [acoes, setAcoes] = useState([{
    item: '',
    acaoCorretiva: '',
    responsavel: '',
    prazo: '',
    conclusao: '',
    evidencias: ''
  }]);

  function adicionarAcao() {
    setAcoes([...acoes, {
      item: '',
      acaoCorretiva: '',
      responsavel: '',
      prazo: '',
      conclusao: '',
      evidencias: ''
    }]);
  }

  function removerAcao(index: number) {
    const novasAcoes = [...acoes];
    novasAcoes.splice(index, 1);
    setAcoes(novasAcoes);
  }

  return (
    <div className="container grid grid-cols-12 gap-4">
      <AccordionItem value="item-9" className="col-span-12">
        <AccordionTrigger>6 - AÇÕES CORRETIVAS</AccordionTrigger>
        <hr />
        <AccordionContent className="w-full mx-1 mt-4">
          {acoes.map((acao, index) => (
            <div key={index} className="overflow-x-scroll mb-4">
              <div className="flex items-center gap-6 min-w-full">
                <div className="min-w-[275px] ml-1 mb-4">
                  <p className="font-bold text-center text-lg mt-4">ITEM</p>
                  <InputField
                    form={form}
                    name={`item-${index}`}
                    label=""
                    placeholder="Digite o item aqui"
                    type="text"
                  />
                </div>
                <div className="min-w-[275px] mb-4">
                  <p className="font-bold text-center text-lg mt-4">AÇÃO DE CORREÇÃO</p>
                  <InputField
                    form={form}
                    name={`acaoCorretiva-${index}`}
                    label=""
                    placeholder="Digite a ação corretiva aqui"
                    type="text"
                  />
                </div>
                <div className="min-w-[275px] mb-4">
                  <p className="font-bold text-center text-lg mt-4">RESPONSÁVEL</p>
                  <InputField
                    form={form}
                    name={`responsavel-${index}`}
                    label=""
                    placeholder="Digite o responsável aqui"
                    type="text"
                  />
                </div>
                <div className="min-w-[275px] mb-4">
                  <p className="font-bold text-center text-lg mt-4">PRAZO</p>
                  <InputField
                    form={form}
                    name={`prazo-${index}`}
                    label=""
                    placeholder="Digite o prazo aqui"
                    type="date"
                  />
                </div>
                <div className="min-w-[275px] mb-4">
                  <p className="font-bold text-center text-lg mt-4">CONCLUSÃO</p>
                  <InputField
                    form={form}
                    name={`conclusao-${index}`}
                    label=""
                    placeholder="Digite a conclusão aqui"
                    type="text"
                  />
                </div>
                <div className="min-w-[275px] pr-2 mb-4">
                  <p className="font-bold text-center text-lg mt-4">EVIDÊNCIAS</p>
                  <InputField
                    form={form}
                    name={`evidencias-${index}`}
                    label=""
                    placeholder="Digite as evidências aqui"
                    type="text"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-4 space-x-4 mr-2">
            {acoes.length > 1 && (
              <button
                type="button"
                onClick={() => removerAcao(acoes.length - 1)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Excluir último campo
              </button>
            )}
            <button
              type="button"
              onClick={adicionarAcao}
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
