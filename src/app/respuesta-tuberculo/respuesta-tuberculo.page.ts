import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-respuesta-tuberculo',
  templateUrl: './respuesta-tuberculo.page.html',
  styleUrls: ['./respuesta-tuberculo.page.scss'],
})
export class RespuestaTuberculoPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
