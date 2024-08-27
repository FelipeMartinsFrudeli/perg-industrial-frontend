import { z } from "zod";

export const FormSchema = z.object({
    numberRNC: z.string().min(1, {
        message: "O Número RNC deve ter no mínimo 10 dígitos.",
    }),
    origem: z.string().min(1, {
        message: "A Origem deve ser digitada.",
    }),
    data: z.string().min(1, {
        message: "A data deve ser digitada.",
    }),
    setorCausa: z.string().min(1, {
        message: "O setor de causa deve ser digitado.",
    }),
    prazo: z.string().min(1, {
        message: "O prazo deve ser digitado.",
    }),
    codigoPeca: z.string().min(1, {
        message: "O código da peça deve ser digitado.",
    }),
    quantidade: z.string().min(1, {
        message: "A quantidade deve ser digitada.",
    }),
    tipo: z.string().min(1, {
        message: "O tipo deve ser digitado.",
    }),
    clienteFornecedor: z.string().min(1, {
        message: "O cliente ou fornecedor deve ser digitado.",
    }),


    descricao: z.string().min(1, {
        message: "A descrição deve ser digitado.",
    }),
    numeroRNCcliente: z.string().min(1, {
        message: "O número RNC do cliente deve ser digitado.",
    }),
    emitente: z.string().min(1, {
        message: "O emitente deve ser digitado.",
    }),


    selectContencao: z.enum(['sim', 'nao'], {
        message: "Alguma opção deve ser selecionada",
    }),
    contencao: z.string().min(1, {
        message: "Não pode estar em branco",
    }),

    locProducao: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    qtdProducao: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    locRecebimento: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    qtdRecebimento: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    locExpedicao: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    qtdExpedicao: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    locEstoque: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    qtdEstoque: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    locTransito: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    qtdTransito: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    locFornecedor: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    qtdFornecedor: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    locCliente: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    qtdCliente: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    locPecasEmCampo: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    qtdPecasEmCampo: z.string().min(1, {
        message: "Não pode estar em branco",
    }),

    itemsDisposicao: z.enum(["sucatear", "retrabalho", "devolver", "naoAplicavel"], {
        message: "Você deve selecionar algo",
      }),

    imagemNaoConforme: z.instanceof(File)
        .refine(file => file.type.startsWith('image/'), {
            message: 'O arquivo deve ser uma imagem',
        })
        .refine(file => file.size <= 5 * 1024 * 1024, {
            message: 'A imagem deve ter no máximo 5MB',
        }),

    analise: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    dataAnalise: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    maoDeObra: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    metodoDeTrabalho: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    maquina: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    meioAmbiente: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    materiaPrima: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    medicao: z.string().min(2, {
        message: "Não pode estar em branco",
    }),

    porqueHouve1: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porqueHouve2: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porqueHouve3: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porqueHouve4: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porqueHouve5: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porqueDetectada1: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porqueDetectada2: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porqueDetectada3: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porqueDetectada4: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porqueDetectada5: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porquePrevista1: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porquePrevista2: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porquePrevista3: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porquePrevista4: z.string().min(2, {
        message: "Não pode estar em branco",
    }),
    porquePrevista5: z.string().min(2, {
        message: "Não pode estar em branco",
    }),

    selectAtualizados: z.enum(['sim', 'nao'], {
        message: "Alguma opção deve ser selecionada",
    }),
    atualizados: z.string().min(1, {
        message: "Não pode estar em branco",
    }),

    item1: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    item2: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    item3: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    item4: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    item5: z.string().min(1, {
        message: "Não pode estar em branco",
    }),

    correcao1: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    correcao2: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    correcao3: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    correcao4: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    correcao5: z.string().min(1, {
        message: "Não pode estar em branco",
    }),

    responsavel1: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    responsavel2: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    responsavel3: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    responsavel4: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    responsavel5: z.string().min(1, {
        message: "Não pode estar em branco",
    }),

    prazo1: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    prazo2: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    prazo3: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    prazo4: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    prazo5: z.string().min(1, {
        message: "Não pode estar em branco",
    }),

    conclusao1: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    conclusao2: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    conclusao3: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    conclusao4: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    conclusao5: z.string().min(1, {
        message: "Não pode estar em branco",
    }),

    evidencias1: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    evidencias2: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    evidencias3: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    evidencias4: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    evidencias5: z.string().min(1, {
        message: "Não pode estar em branco",
    }),

    selectEncerramento: z.enum(['sim', 'nao'], {
        message: "Alguma opção deve ser selecionada",
    }),
    encerramento: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    responsavel: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
    verificacao: z.string().min(1, {
        message: "Não pode estar em branco",
    }),
});


export const DefaultValuesForm = {
    numberRNC: "",
    origem: "",
    data: "",
    setorCausa: "",
    prazo: "",
    codigoPeca: "",
    quantidade: "",
    tipo: "",
    clienteFornecedor: "",
    descricao: "",
    numeroRNCcliente: "",
    emitente: "",
    selectContencao: "",
    contencao: "",
    locProducao: "",
    qtdProducao: "",
    locRecebimento: "",
    qtdRecebimento: "",
    locExpedicao: "",
    qtdExpedicao: "",
    locEstoque: "",
    qtdEstoque: "",
    locTransito: "",
    qtdTransito: "",
    locFornecedor: "",
    qtdFornecedor: "",
    locCliente: "",
    qtdCliente: "",
    locPecasEmCampo: "",
    qtdPecasEmCampo: "",

    itemsDisposicao: "",

    imagemNaoConforme: "",

    analise: "",
    dataAnalise: "",

    maoDeObra: "",
    metodoDeTrabalho: "",
    maquina: "",
    meioAmbiente: "",
    materiaPrima: "",
    medicao: "",

    porqueHouve1: "",
    porqueHouve2: "",
    porqueHouve3: "",
    porqueHouve4: "",
    porqueHouve5: "",
    porqueDetectada1: "",
    porqueDetectada2: "",
    porqueDetectada3: "",
    porqueDetectada4: "",
    porqueDetectada5: "",
    porquePrevista1: "",
    porquePrevista2: "",
    porquePrevista3: "",
    porquePrevista4: "",
    porquePrevista5: "",

    selectAtualizados: "",
    atualizados: "",

    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    correcao1: "",
    correcao2: "",
    correcao3: "",
    correcao4: "",
    correcao5: "",
    responsavel1: "",
    responsavel2: "",
    responsavel3: "",
    responsavel4: "",
    responsavel5: "",
    prazo1: "",
    prazo2: "",
    prazo3: "",
    prazo4: "",
    prazo5: "",
    conclusao1: "",
    conclusao2: "",
    conclusao3: "",
    conclusao4: "",
    conclusao5: "",
    evidencias1: "",
    evidencias2: "",
    evidencias3: "",
    evidencias4: "",
    evidencias5: "",

    selectEncerramento: "",
    encerramento: "",
    responsavel: "",
    verificacao: "",
}