export interface ProdutoModel {
  codigo: number | null;
  descricao: string;
  tipoProduto: 'ELETRONICO' | 'ELETRODOMESTICO' | 'MOVEL';
  valorFornecedor: number;
  quantidadeEstoque: number;
}
