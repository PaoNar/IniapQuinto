import { Component, OnInit } from '@angular/core';
import { VariablesService} from '../../variables.service';

@Component({
  selector: 'app-cereales',
  templateUrl: './cereales.page.html',
  styleUrls: ['./cereales.page.scss'],
})
export class CerealesPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
