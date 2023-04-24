import { Component } from '@angular/core';
import { Peca } from '../peca.model';
import { PecaService } from '../peca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-peca',
  templateUrl: './nova-peca.component.html',
  styleUrls: ['./nova-peca.component.css']
})
export class NovaPecaComponent {

  codigo : string = '';
  descricao : string  = '';
  quantidade : number = 0;
  quantidadeMin : number = 0;
  capacidade : number = 0;

  constructor(
    private pecaService:PecaService,
    private router : Router
  ){}

  onSubmit(form: any){

    if(this.pecaService.getPeca(this.codigo))
      alert("Peça já existe!")
    else{
      this.pecaService.addPeca(
        this.codigo, 
        this.descricao, 
        this.quantidade,
        this.quantidadeMin,
        this.capacidade
      )
      this.router.navigate([''])
    }

    



  }

}
