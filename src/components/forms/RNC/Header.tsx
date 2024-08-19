import { InputField } from "@/components/ui/input";

function Header() {
  return (
    <div className="col-span-10 col-start-2 flex items-center gap-4">
      <div className="container mx-auto grid grid-cols-12 items-center gap-10">

        <div className="[&>*]:col-span-6">
          <InputField name="origin" label="origem" placeholder="Digite a origem aqui" />
          <InputField name="date" label="Data" placeholder="Data do registro" />
          <InputField name="department" label="Setor Causa" placeholder="Digite o setor aqui" />
          <InputField name="deadline" label="Prazo" placeholder="Prazo para resposta" />
          <InputField name="itemId" label="Código da peça" placeholder="Digite o código aqui" />
          <InputField name="quantity" label="Quantidade" placeholder="Digite a quantidade aqui" type="number" />
          <InputField name="type" label="Tipo" placeholder="Digite o tipo aqui" />

          {/* Criar select - escolher cliente ou fornecer
              -> campo de pesquisa com nome do cliente ou fornecedor
              -> quando digitar vai aparecer sugestões (listados pelo banco de dados)
            
            <InputField name="type" label="Cliente / Fornecedor" placeholder="Digite o tipo aqui" /> 
          */}
        </div>
      </div>
    </div>
  )
}

export default Header