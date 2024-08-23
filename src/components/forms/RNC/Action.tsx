import { InputField } from "@/components/ui/input";


function Action() {
  return (
    <>
      <InputField name="description" label="Descrição" placeholder="Detalhes do ocorrido" className="col-span-12" />
      <InputField name="descricao" label="N° RNC Cliente" placeholder="Digite a origem aqui" className="col-span-6" />
      <InputField name="descricao" label="Emitente" placeholder="Digite o emitente aqui" className="col-span-6" />
    </>
  );
}

export default Action;
