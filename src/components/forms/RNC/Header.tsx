import { InputField } from "@/components/ui/input";
import { useState } from "react";
import SelectTwoField from "@/components/ui/select";
 
function Header() {
  const [showClientInputs, setShowClientInputs] = useState(false);
  const [showSupplierInputs, setShowSupplierInputs] = useState(false);

  const handleSelectChange = (value: string) => {
    setShowClientInputs(value === 'client');
    setShowSupplierInputs(value === 'supplier');
  }

  return (
    <div className="col-span-12 flex items-center gap-4 my-10">
      <div className="container mx-auto grid grid-cols-12 items-center gap-10">
        <InputField name="origin" label="Origem" placeholder="Digite a origem aqui" className="col-span-6" />
        <InputField name="date" label="Data" placeholder="Data do registro" className="col-span-6" />
        <InputField name="department" label="Setor Causa" placeholder="Digite o setor aqui" className="col-span-4" />
        <InputField name="deadline" label="Prazo" placeholder="Prazo para resposta" className="col-span-4" />
        <InputField name="itemId" label="Código da peça" placeholder="Digite o código aqui" className="col-span-4" />
        <InputField name="quantity" label="Quantidade" placeholder="Digite a quantidade aqui" type="number" className="col-span-6" />
        <InputField name="type" label="Tipo" placeholder="Digite o tipo aqui" className="col-span-6" />

        <p className="col-span-3 align-middle">Selecione se é um Cliente ou Fornecedor</p>
        <SelectTwoField name="selectHeader" className="col-span-2" placeholder="Selecione uma opção" firstValue="client" firstSelect="Cliente" secondValue="supplier" secondSelect="Fornecedor" onSelectChange={handleSelectChange} />

        {showClientInputs && (
          <InputField name="client" label="Nome" placeholder="Digite o nome do cliente aqui" className="col-span-7" />
        )}

        {showSupplierInputs && (
          <InputField name="supplier" label="Nome" placeholder="Digite o nome do fornecedor aqui" className="col-span-7" />
        )}
        {/* Criar select - escolher cliente ou fornecer
              -> campo de pesquisa com nome do cliente ou fornecedor
              -> quando digitar vai aparecer sugestões (listados pelo banco de dados)
            
            <InputField name="type" label="Cliente / Fornecedor" placeholder="Digite o tipo aqui" /> 
          */}
      </div>
    </div>
  )
}

export default Header