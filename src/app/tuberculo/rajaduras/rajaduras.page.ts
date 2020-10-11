import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-rajaduras',
  templateUrl: './rajaduras.page.html',
  styleUrls: ['./rajaduras.page.scss'],
})
export class RajadurasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
