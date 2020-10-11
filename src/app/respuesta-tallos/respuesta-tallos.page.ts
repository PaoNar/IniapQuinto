import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-respuesta-tallos',
  templateUrl: './respuesta-tallos.page.html',
  styleUrls: ['./respuesta-tallos.page.scss'],
})
export class RespuestaTallosPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
