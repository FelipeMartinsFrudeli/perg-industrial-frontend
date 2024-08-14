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


    selectContencao: z.enum(['sim','nao'], {
        message: "Alguma opção deve ser selecionada",
    }),
    contencao: z.string().min(1, {
        message: "O motivo deve ser digitado.",
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

    itemsDisposicao: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "Você deve selecionar algo",
    }),

});
