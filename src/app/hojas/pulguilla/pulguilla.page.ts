import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-pulguilla',
  templateUrl: './pulguilla.page.html',
  styleUrls: ['./pulguilla.page.scss'],
})
export class PulguillaPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
