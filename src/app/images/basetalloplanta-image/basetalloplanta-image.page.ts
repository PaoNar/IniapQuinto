import { Component, OnInit } from '@angular/core';

import { ModalController, NavController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';
import { RouterLink, RouterLinkWithHref, Router } from "@angular/router";

@Component({
  selector: 'app-basetalloplanta-image',
  templateUrl: './basetalloplanta-image.page.html',
  styleUrls: ['./basetalloplanta-image.page.scss'],
})
export class BasetalloplantaImagePage implements OnInit {
 

  constructor(private modalCtrl: ModalController, public nombre: VariablesService
    ) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  
  }


 

 

  

}
