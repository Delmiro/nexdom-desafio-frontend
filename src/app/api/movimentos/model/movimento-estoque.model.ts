import { ProdutoModel } from "../../produtos/model/produto.model";

export interface MovimentoEstoqueModel {
  id: number;
  produto: ProdutoModel;
  tipoMovimento: 'ENTRADA' | 'SAIDA';
  quantidade: number;
  dataMovimento: string;
  produtoId: number
}
