import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-respuesta3hojas',
  templateUrl: './respuesta3hojas.page.html',
  styleUrls: ['./respuesta3hojas.page.scss'],
})
export class Respuesta3hojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
