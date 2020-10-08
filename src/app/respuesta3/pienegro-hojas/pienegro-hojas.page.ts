import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-pienegro-hojas',
  templateUrl: './pienegro-hojas.page.html',
  styleUrls: ['./pienegro-hojas.page.scss'],
})
export class PienegroHojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
