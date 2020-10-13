import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-virosis',
  templateUrl: './virosis.page.html',
  styleUrls: ['./virosis.page.scss'],
})
export class VirosisPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
