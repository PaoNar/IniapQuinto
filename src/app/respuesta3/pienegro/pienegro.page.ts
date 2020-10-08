import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-pienegro',
  templateUrl: './pienegro.page.html',
  styleUrls: ['./pienegro.page.scss'],
})
export class PienegroPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
