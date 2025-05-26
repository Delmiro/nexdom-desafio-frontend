import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { MovimentoEstoqueModel } from '../model/movimento-estoque.model';

@Injectable({ providedIn: 'root' })
export class MovimentoService {
  private apiUrl = 'http://localhost:8080/api/movimentos'; 

  constructor(private http: HttpClient) {}

  listarMovimentos(): Observable<MovimentoEstoqueModel[]> {
    return this.http.get<MovimentoEstoqueModel[]>(this.apiUrl);
  }
}
