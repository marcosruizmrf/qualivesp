export interface Todo {
    id?: String,
    rnc: Number,
    descricaoDoProduto?: String,
    codigoDaPeca?: Number,
    descricaoNaoConformidade?: String,
    disposicao?: String,
    responsavel?:String,
    ordemDeProducao?: String,
    dataParaFinalizar: any,
    finalizado: Boolean
}