import { Component } from '@angular/core';

import { Peca } from '../peca.model';
import { PecaService } from '../peca.service';

@Component({
  selector: 'app-listar-pecas',
  templateUrl: './listar-pecas.component.html',
  styleUrls: ['./listar-pecas.component.css']
})
export class ListarPecasComponent {

  pecas : Peca[]
  
  constructor(private pecaService: PecaService) { 
    this.pecas = pecaService.getPecas
  }

}
