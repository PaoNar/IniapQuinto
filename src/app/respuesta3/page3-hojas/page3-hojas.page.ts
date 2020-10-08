import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page3-hojas',
  templateUrl: './page3-hojas.page.html',
  styleUrls: ['./page3-hojas.page.scss'],
})
export class Page3HojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
