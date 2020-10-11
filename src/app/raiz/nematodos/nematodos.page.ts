import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-nematodos',
  templateUrl: './nematodos.page.html',
  styleUrls: ['./nematodos.page.scss'],
})
export class NematodosPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
