import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-raicessanasplanta',
  templateUrl: './raicessanasplanta.page.html',
  styleUrls: ['./raicessanasplanta.page.scss'],
})
export class RaicessanasplantaPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
