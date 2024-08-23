import { InputField } from "@/components/ui/input";

function Details() {
  return (
    <>
      <InputField name="description" label="Descrição" placeholder="Detalhes do ocorrido" className="col-span-12" />
      <InputField name="clienteRNC" label="N° RNC Cliente" placeholder="Digite a origem aqui" className="col-span-6" />
      <InputField name="emitente" label="Emitente" placeholder="Digite o emitente aqui" className="col-span-6" />

    </>
  );
}

export default Details;
