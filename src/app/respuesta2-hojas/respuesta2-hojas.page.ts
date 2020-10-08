import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-respuesta2-hojas',
  templateUrl: './respuesta2-hojas.page.html',
  styleUrls: ['./respuesta2-hojas.page.scss'],
})
export class Respuesta2HojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
