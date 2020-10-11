import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-corazon-hueco',
  templateUrl: './corazon-hueco.page.html',
  styleUrls: ['./corazon-hueco.page.scss'],
})
export class CorazonHuecoPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
