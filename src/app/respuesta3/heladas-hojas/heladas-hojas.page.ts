import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-heladas-hojas',
  templateUrl: './heladas-hojas.page.html',
  styleUrls: ['./heladas-hojas.page.scss'],
})
export class HeladasHojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
