import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-gusano-blanco',
  templateUrl: './gusano-blanco.page.html',
  styleUrls: ['./gusano-blanco.page.scss'],
})
export class GusanoBlancoPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
