import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditarPecaComponent } from './pecas/editar-peca/editar-peca.component';
import { ListarPecasComponent } from './pecas/listar-pecas/listar-pecas.component';
import { NovaPecaComponent } from './pecas/nova-peca/nova-peca.component';

const routes: Routes = [
  {path:"", component:ListarPecasComponent},
  {path:"editar/:cod", component:EditarPecaComponent},
  {path:"nova", component:NovaPecaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
