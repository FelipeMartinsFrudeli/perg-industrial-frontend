import { InputField } from "@/components/ui/input";

function Analytics() {
  return (
    <>
      <InputField name="dataAnalise" label="Data de Análise" placeholder="Defina a data" type="date" className="col-span-6" />
      <InputField name="analytic" label="Análise" placeholder="Digite a análise aqui" className="col-span-6" />
    </>
  );
}

export default Analytics;