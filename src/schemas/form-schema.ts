import { z } from "zod";

export const FormSchema = z.object({
    numberRNC: z.string().min(2, {
        message: "O Número RNC deve ter no mínimo 10 dígitos.",
    }),
    origem: z.string().min(2, {
        message: "A Origem deve ser digitada.",
    }),
    data: z.string().min(2, {
        message: "A data deve ser digitada.",
    }),
    setorCausa: z.string().min(2, {
        message: "O setor de causa deve ser digitado.",
    }),
    prazo: z.string().min(2, {
        message: "O prazo deve ser digitado.",
    }),
    codigoPeca: z.string().min(2, {
        message: "O código da peça deve ser digitado.",
    }),
    quantidade: z.string().min(2, {
        message: "A quantidade deve ser digitada.",
    }),
    tipo: z.string().min(2, {
        message: "O tipo deve ser digitado.",
    }),
    clienteFornecedor: z.string().min(2, {
        message: "O cliente ou fornecedor deve ser digitado.",
    }),
    descricao: z.string().min(2, {
        message: "A descrição deve ser digitado.",
    }),
    numeroRNCcliente: z.string().min(2, {
        message: "O número RNC do cliente deve ser digitado.",
    }),
    emitente: z.string().min(2, {
        message: "O emitente deve ser digitado.",
    }),
    selectContencao: z.enum(['sim','não'], {
        message: "Alguma opção deve ser selecionada",
    }),
    contencao: z.string().min(2, {
        message: "O motivo deve ser digitado.",
    }),
});
