import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-punta-morada',
  templateUrl: './punta-morada.page.html',
  styleUrls: ['./punta-morada.page.scss'],
})
export class PuntaMoradaPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
