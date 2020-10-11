import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-roya',
  templateUrl: './roya.page.html',
  styleUrls: ['./roya.page.scss'],
})
export class RoyaPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
