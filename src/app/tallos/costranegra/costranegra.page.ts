import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-costranegra',
  templateUrl: './costranegra.page.html',
  styleUrls: ['./costranegra.page.scss'],
})
export class CostranegraPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
