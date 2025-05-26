import { Component } from '@angular/core';
import { ProdutoDTO } from '../model/produto.model';
import { ProdutoService } from '../service/produto-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent {
   
  model: ProdutoDTO = {
    codigo: null, descricao: '', tipoProduto: 'ELETRONICO',
    valorFornecedor: 0, quantidadeEstoque: 0
  };

  constructor(private produtoService: ProdutoService, private router: Router) {}

  salvar() {
    this.produtoService.createProduto(this.model).subscribe(() => {
      this.router.navigate(['/produtos']);
    });
  }

}
