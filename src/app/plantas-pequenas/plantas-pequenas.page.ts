import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-plantas-pequenas',
  templateUrl: './plantas-pequenas.page.html',
  styleUrls: ['./plantas-pequenas.page.scss'],
})
export class PlantasPequenasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
