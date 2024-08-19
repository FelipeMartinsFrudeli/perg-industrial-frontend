import { InputField } from "@/components/ui/input";

function Details() {
  return (
    <>
      <InputField name="description" label="Descrição" placeholder="Detalhes do ocorrido" className="col-span-12" />
  
      <div className="[&>*]:col-span-6">
        <InputField name="descricao" label="N° RNC Cliente" placeholder="Digite a origem aqui" />
        <InputField name="descricao" label="Emitente" placeholder="Digite o emitente aqui" />
      </div>
    </>
  );
}

export default Details;
