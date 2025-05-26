import { Component, OnInit } from '@angular/core';
import { MovimentoEstoqueModel } from '../model/movimento-estoque.model';
import { MovimentoService } from '../service/movimento-service';

@Component({
  selector: 'app-movimento-list',
  standalone: true,
  imports: [],
  templateUrl: './movimento-list.component.html',
  styleUrl: './movimento-list.component.css'
})
export class MovimentoListComponent implements OnInit {

   movimentos: MovimentoEstoqueModel[] = [];

   
  constructor(private movimentoService: MovimentoService) {}

    ngOnInit(): void {
    this.movimentoService.listarMovimentos().subscribe(data => {
      this.movimentos = data;
    });
  }
   
}
