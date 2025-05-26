import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoDTO } from '../model/produto.model';


@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private base = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  listProdutos(): Observable<ProdutoDTO[]> {
    return this.http.get<ProdutoDTO[]>(`${this.base}/produtos`);
  }
  getProduto(id: number) {
    return this.http.get<ProdutoDTO>(`${this.base}/produtos/${id}`);
  }
  createProduto(dto: ProdutoDTO) {
    return this.http.post<ProdutoDTO>(`${this.base}/produtos`, dto);
  }
  deleteProduto(id: number) {
    return this.http.delete<void>(`${this.base}/produtos/${id}`);
  }
  listProdutosByTipo(tipo: string) {
    return this.http.get<ProdutoDTO[]>(`${this.base}/produtos/tipo/${tipo}`);
  }

}
