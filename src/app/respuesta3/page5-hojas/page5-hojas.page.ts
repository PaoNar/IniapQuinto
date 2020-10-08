import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page5-hojas',
  templateUrl: './page5-hojas.page.html',
  styleUrls: ['./page5-hojas.page.scss'],
})
export class Page5HojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
