import SelectTwoField from "@/components/ui/select";

function Risks() {
    return (
        <>
            <p className="col-span-6 align-middle h-6">
                Necessário avaliação da matriz R.O.?
            </p>
            <SelectTwoField 
                name="selectAtualizados" 
                className="col-span-3" 
                placeholder="Selecione uma opção" 
                firstValue="sim" 
                firstSelect="Sim" 
                secondValue="não" 
                secondSelect="Não" 
            />
        </>
    );
}

export default Risks;
