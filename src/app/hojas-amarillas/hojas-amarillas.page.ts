import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-hojas-amarillas',
  templateUrl: './hojas-amarillas.page.html',
  styleUrls: ['./hojas-amarillas.page.scss'],
})
export class HojasAmarillasPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
