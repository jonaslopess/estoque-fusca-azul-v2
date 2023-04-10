import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPecasComponent } from './pecas/listar-pecas/listar-pecas.component';
import { EditarPecaComponent } from './pecas/editar-peca/editar-peca.component';
import { PecaService } from './pecas/peca.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarPecasComponent,
    EditarPecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PecaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
