import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-respuesta2',
  templateUrl: './respuesta2.page.html',
  styleUrls: ['./respuesta2.page.scss'],
})
export class Respuesta2Page implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
