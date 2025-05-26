import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './api/produtos/produto-list/produto-list.component';
import { ProdutoFormComponent } from './api/produtos/produto-form/produto-form.component';


const routes: Routes = [
  { path: 'produtos', component: ProdutoListComponent },
   { path: 'produtos/novo', component: ProdutoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
