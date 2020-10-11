import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-mosca-minadora',
  templateUrl: './mosca-minadora.page.html',
  styleUrls: ['./mosca-minadora.page.scss'],
})
export class MoscaMinadoraPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
