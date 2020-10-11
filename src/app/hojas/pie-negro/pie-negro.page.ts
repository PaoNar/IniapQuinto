import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-pie-negro',
  templateUrl: './pie-negro.page.html',
  styleUrls: ['./pie-negro.page.scss'],
})
export class PieNegroPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
