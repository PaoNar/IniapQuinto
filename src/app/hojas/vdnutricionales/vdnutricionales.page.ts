import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-vdnutricionales',
  templateUrl: './vdnutricionales.page.html',
  styleUrls: ['./vdnutricionales.page.scss'],
})
export class VdnutricionalesPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
