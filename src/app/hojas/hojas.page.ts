import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-hojas',
  templateUrl: './hojas.page.html',
  styleUrls: ['./hojas.page.scss'],
})
export class HojasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
