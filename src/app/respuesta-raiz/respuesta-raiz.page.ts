import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-respuesta-raiz',
  templateUrl: './respuesta-raiz.page.html',
  styleUrls: ['./respuesta-raiz.page.scss'],
})
export class RespuestaRaizPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
