import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Peca } from '../peca.model';
import { PecaService } from '../peca.service';

@Component({
  selector: 'app-editar-peca',
  templateUrl: './editar-peca.component.html',
  styleUrls: ['./editar-peca.component.css']
})
export class EditarPecaComponent {

  cod: string = ''
	peca: Peca | undefined

  quantidade: number = 0
  alert: number = 1

  constructor(
    private pecaService: PecaService,
    private route: ActivatedRoute,
		private router: Router
  ) {  }

  ngOnInit(): void {
    this.route.params.subscribe( 
			(params) => {
				this.cod = params['cod'];
				this.peca = this.pecaService.getPeca(this.cod);
				if(this.peca == null){
					this.router.navigate(['']);
				}
			}
		)
    if(this.peca)
      this.alert = this.peca.getAlert()
  }

  atualizarQuantidade(op: number){
    op = Number(op)
    if (this.peca){
      this.pecaService.atualizaQuantidadePeca(this.peca.getCod, op*this.quantidade)
      this.alert = this.peca.getAlert()
    }else
      alert("Não foi possivel aterar a quantidade!")

  }

}
