import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-virosis2-planta',
  templateUrl: './virosis2-planta.page.html',
  styleUrls: ['./virosis2-planta.page.scss'],
})
export class Virosis2PlantaPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
