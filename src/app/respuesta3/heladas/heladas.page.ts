import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-heladas',
  templateUrl: './heladas.page.html',
  styleUrls: ['./heladas.page.scss'],
})
export class HeladasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
