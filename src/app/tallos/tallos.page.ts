import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-tallos',
  templateUrl: './tallos.page.html',
  styleUrls: ['./tallos.page.scss'],
})
export class TallosPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
