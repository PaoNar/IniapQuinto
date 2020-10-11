import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-agrietamiento',
  templateUrl: './agrietamiento.page.html',
  styleUrls: ['./agrietamiento.page.scss'],
})
export class AgrietamientoPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
