import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-hojas-mordidas',
  templateUrl: './hojas-mordidas.page.html',
  styleUrls: ['./hojas-mordidas.page.scss'],
})
export class HojasMordidasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
