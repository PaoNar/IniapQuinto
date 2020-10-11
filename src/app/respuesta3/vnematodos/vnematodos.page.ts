import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-vnematodos',
  templateUrl: './vnematodos.page.html',
  styleUrls: ['./vnematodos.page.scss'],
})
export class VnematodosPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
