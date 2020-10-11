import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-lancha',
  templateUrl: './lancha.page.html',
  styleUrls: ['./lancha.page.scss'],
})
export class LanchaPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
