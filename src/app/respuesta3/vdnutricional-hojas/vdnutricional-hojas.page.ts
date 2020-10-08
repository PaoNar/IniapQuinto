import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-vdnutricional-hojas',
  templateUrl: './vdnutricional-hojas.page.html',
  styleUrls: ['./vdnutricional-hojas.page.scss'],
})
export class VdnutricionalHojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
