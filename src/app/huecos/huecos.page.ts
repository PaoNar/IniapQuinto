import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-huecos',
  templateUrl: './huecos.page.html',
  styleUrls: ['./huecos.page.scss'],
})
export class HuecosPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
