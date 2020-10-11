import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-raiz',
  templateUrl: './raiz.page.html',
  styleUrls: ['./raiz.page.scss'],
})
export class RaizPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
