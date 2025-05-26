export interface MovimentoEstoqueModel {
  id: number;
  tipo: 'ENTRADA' | 'SAIDA';
  quantidade: number;
  data: string;
  produto: {
    id: number;
    descricao: string;
  };
}
