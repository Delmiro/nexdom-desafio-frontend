import { Component, OnInit } from '@angular/core';

import { ProdutoModel } from '../model/produto.model';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../service/produto-service';

@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [CommonModule],
  providers: [ProdutoService],
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.css'
})
export class ProdutoListComponent implements OnInit {
  
  produtos: ProdutoModel[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
      this.produtoService.listProdutos().subscribe(data => this.produtos = data);
  }

}
