import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page4-hojas',
  templateUrl: './page4-hojas.page.html',
  styleUrls: ['./page4-hojas.page.scss'],
})
export class Page4HojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
