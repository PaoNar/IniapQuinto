import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-polilla',
  templateUrl: './polilla.page.html',
  styleUrls: ['./polilla.page.scss'],
})
export class PolillaPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
