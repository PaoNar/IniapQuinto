import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-punta-morada2',
  templateUrl: './punta-morada2.page.html',
  styleUrls: ['./punta-morada2.page.scss'],
})
export class PuntaMorada2Page implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
