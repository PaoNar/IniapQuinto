import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-costra-negra',
  templateUrl: './costra-negra.page.html',
  styleUrls: ['./costra-negra.page.scss'],
})
export class CostraNegraPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
