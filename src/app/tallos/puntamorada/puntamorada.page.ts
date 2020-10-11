import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-puntamorada',
  templateUrl: './puntamorada.page.html',
  styleUrls: ['./puntamorada.page.scss'],
})
export class PuntamoradaPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
