import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page2-hojas',
  templateUrl: './page2-hojas.page.html',
  styleUrls: ['./page2-hojas.page.scss'],
})
export class Page2HojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
