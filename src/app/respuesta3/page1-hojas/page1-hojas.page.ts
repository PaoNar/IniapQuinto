import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page1-hojas',
  templateUrl: './page1-hojas.page.html',
  styleUrls: ['./page1-hojas.page.scss'],
})
export class Page1HojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
