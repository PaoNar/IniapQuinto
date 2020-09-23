import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../../variables.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
