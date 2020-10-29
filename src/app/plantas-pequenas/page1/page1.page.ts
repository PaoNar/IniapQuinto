import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PresenciabolitasImagePage } from 'src/app/images/presenciabolitas-image/presenciabolitas-image.page';
import { RaicessanasImagePage } from 'src/app/images/raicessanas-image/raicessanas-image.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(public nombre: VariablesService, 
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }


  

  // imagenes

  async raicessanasImage(){
    const modal = await this.modalCtrl.create({
      component: RaicessanasImagePage
    })

    await modal.present();
  }

  async presenciabolitasImage(){
    const modal = await this.modalCtrl.create({
      component: PresenciabolitasImagePage
    })

    await modal.present();
  }


}
