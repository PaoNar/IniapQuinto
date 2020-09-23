import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../../variables.service';

@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.page.html',
  styleUrls: ['./enfermedades.page.scss'],
})
export class EnfermedadesPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
