import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-carbon',
  templateUrl: './carbon.page.html',
  styleUrls: ['./carbon.page.scss'],
})
export class CarbonPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
