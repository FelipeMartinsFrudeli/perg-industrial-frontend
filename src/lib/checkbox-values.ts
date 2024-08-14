interface itemsSchema {
    id: string,
    label: string
}

export function itemsDisposicao(): itemsSchema[] {
    return [
        {
            id: "1",
            label: "Retrabalho"
        },
        {
            id: "2",
            label: "Sucatear"
        },
        {
            id: "3",
            label: "Devolver"
        },
        {
            id: "4",
            label: "Não Aplicavel"
        }
    ]
}