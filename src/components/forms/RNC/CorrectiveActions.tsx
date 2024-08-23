import { InputField } from "@/components/ui/input";

function CorrectiveActions() {
    return (
        <>
            <div className="container">
                <div className="overflow-x-auto mb-4">
                    <div className="flex items-center gap-6 min-w-max">
                        <div className="min-w-[300px]">
                            <InputField name="maoDeObra" label="Mão de Obra" placeholder="Digite a mão de obra aqui" className="w-full" />
                        </div>
                        <div className="min-w-[300px]">
                            <InputField name="metodoDeTrabalho" label="Método de Trabalho" placeholder="Digite o método de trabalho aqui" className="w-full" />
                        </div>
                        <div className="min-w-[300px]">
                            <InputField name="maquina" label="Máquina" placeholder="Digite a máquina aqui" className="w-full" />
                        </div>
                        <div className="min-w-[300px]">
                            <InputField name="meioAmbiente" label="Meio Ambiente" placeholder="Digite o meio ambiente aqui" className="w-full" />
                        </div>
                        <div className="min-w-[300px]">
                            <InputField name="materiaPrima" label="Matéria Prima" placeholder="Digite a matéria prima aqui" className="w-full" />
                        </div>
                        <div className="min-w-[300px]">
                            <InputField name="medicao" label="Medição" placeholder="Digite a medição aqui" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CorrectiveActions;
