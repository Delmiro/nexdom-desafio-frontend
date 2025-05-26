import { Routes } from '@angular/router';
import { ProdutoListComponent } from './api/produtos/produto-list/produto-list.component';
import { ProdutoFormComponent } from './api/produtos/produto-form/produto-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'produtos/novo', component: ProdutoFormComponent },
];
