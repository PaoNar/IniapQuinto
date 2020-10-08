import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-respuesta-hojas',
  templateUrl: './respuesta-hojas.page.html',
  styleUrls: ['./respuesta-hojas.page.scss'],
})
export class RespuestaHojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
