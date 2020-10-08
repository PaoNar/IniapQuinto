import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-vdnutricional',
  templateUrl: './vdnutricional.page.html',
  styleUrls: ['./vdnutricional.page.scss'],
})
export class VDnutricionalPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
