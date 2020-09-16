import { Component, OnInit } from '@angular/core';
import { VariablesService} from '../../variables.service';

@Component({
  selector: 'app-tuberculos',
  templateUrl: './tuberculos.page.html',
  styleUrls: ['./tuberculos.page.scss'],
})
export class TuberculosPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
