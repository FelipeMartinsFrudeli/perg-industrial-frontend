import { InputField } from "@/components/ui/input";

function Diagram() {
  return (
    <>
      <InputField name="maoDeObra" label="Mão de Obra" placeholder="Digite a mão de obra aqui" className="col-span-6" />
      <InputField name="metodoDeTrabalho" label="Método de Trabalho" placeholder="Digite o método de trabalho aqui" className="col-span-6" />
      <InputField name="maquina" label="Máquina" placeholder="Digite a máquina aqui" className="col-span-6" />
      <InputField name="meioAmbiente" label="Meio Ambiente" placeholder="Digite o meio ambiente aqui" className="col-span-6" />
      <InputField name="materiaPrima" label="Matéria Prima" placeholder="Digite o matéria prima aqui" className="col-span-6" />
      <InputField name="medicao" label="Medição" placeholder="Digite a medição aqui" className="col-span-6" />
    </>
  );
}

export default Diagram;
