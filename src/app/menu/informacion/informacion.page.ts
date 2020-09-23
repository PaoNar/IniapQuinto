import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../../variables.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
