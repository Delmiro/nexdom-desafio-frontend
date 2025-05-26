import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto-service';
import { ProdutoDTO } from '../model/produto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [CommonModule],
  providers: [ProdutoService],
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.css'
})
export class ProdutoListComponent implements OnInit {
  
  produtos: ProdutoDTO[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
      this.produtoService.listProdutos().subscribe(data => this.produtos = data);
  }

}
