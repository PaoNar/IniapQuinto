import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../variables.service';

@Component({
  selector: 'app-enfermedad',
  templateUrl: './enfermedad.page.html',
  styleUrls: ['./enfermedad.page.scss'],
})
export class EnfermedadPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
