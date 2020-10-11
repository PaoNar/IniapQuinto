import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-tuberculo',
  templateUrl: './tuberculo.page.html',
  styleUrls: ['./tuberculo.page.scss'],
})
export class TuberculoPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
