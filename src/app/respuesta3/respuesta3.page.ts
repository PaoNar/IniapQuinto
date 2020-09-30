import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-respuesta3',
  templateUrl: './respuesta3.page.html',
  styleUrls: ['./respuesta3.page.scss'],
})
export class Respuesta3Page implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
