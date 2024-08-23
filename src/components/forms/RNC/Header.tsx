import { InputField } from "@/components/ui/input";
function Header() {
  return (
    <div className="col-span-10 col-start-2 flex items-center gap-4 my-10">
      <div className="container mx-auto grid grid-cols-12 items-center gap-10">
          <InputField name="origin" label="Origem" placeholder="Digite a origem aqui" className="col-span-6"/>
          <InputField name="date" label="Data" placeholder="Data do registro" className="col-span-6"/>
          <InputField name="department" label="Setor Causa" placeholder="Digite o setor aqui" className="col-span-6"/>
          <InputField name="deadline" label="Prazo" placeholder="Prazo para resposta" className="col-span-6"/>
          <InputField name="itemId" label="Código da peça" placeholder="Digite o código aqui" className="col-span-6"/>
          <InputField name="quantity" label="Quantidade" placeholder="Digite a quantidade aqui" type="number" className="col-span-6"/>
          <InputField name="type" label="Tipo" placeholder="Digite o tipo aqui" className="col-span-6"/>

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