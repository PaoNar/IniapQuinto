import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-virosis2',
  templateUrl: './virosis2.page.html',
  styleUrls: ['./virosis2.page.scss'],
})
export class Virosis2Page implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
