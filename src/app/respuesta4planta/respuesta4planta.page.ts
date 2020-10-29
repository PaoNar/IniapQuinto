import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-respuesta4planta',
  templateUrl: './respuesta4planta.page.html',
  styleUrls: ['./respuesta4planta.page.scss'],
})
export class Respuesta4plantaPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
