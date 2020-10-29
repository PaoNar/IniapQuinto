import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-hojasminadas',
  templateUrl: './hojasminadas.page.html',
  styleUrls: ['./hojasminadas.page.scss'],
})
export class HojasminadasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
