import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-presenciatuberculos',
  templateUrl: './presenciatuberculos.page.html',
  styleUrls: ['./presenciatuberculos.page.scss'],
})
export class PresenciatuberculosPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
