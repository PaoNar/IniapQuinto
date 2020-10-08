import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-hojas2-amarillas',
  templateUrl: './hojas2-amarillas.page.html',
  styleUrls: ['./hojas2-amarillas.page.scss'],
})
export class Hojas2AmarillasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
