import { Component, OnInit } from '@angular/core';
import { VariablesService} from '../../variables.service';


@Component({
  selector: 'app-cacao',
  templateUrl: './cacao.page.html',
  styleUrls: ['./cacao.page.scss'],
})
export class CacaoPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
