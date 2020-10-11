import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-sarna',
  templateUrl: './sarna.page.html',
  styleUrls: ['./sarna.page.scss'],
})
export class SarnaPage implements OnInit {

  constructor(public nombre: VariablesService) { }

  ngOnInit() {
  }

}
