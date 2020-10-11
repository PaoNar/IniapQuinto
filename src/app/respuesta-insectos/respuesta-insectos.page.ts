import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-respuesta-insectos',
  templateUrl: './respuesta-insectos.page.html',
  styleUrls: ['./respuesta-insectos.page.scss'],
})
export class RespuestaInsectosPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
