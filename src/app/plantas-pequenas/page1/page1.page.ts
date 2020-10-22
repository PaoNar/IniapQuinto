import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PresenciabolitasImagePage } from 'src/app/images/presenciabolitas-image/presenciabolitas-image.page';
import { RaicessanasImagePage } from 'src/app/images/raicessanas-image/raicessanas-image.page';
import { PresenciaBolitasModalPage } from 'src/app/modals/presencia-bolitas-modal/presencia-bolitas-modal.page';
import { RaicesSanasModalPage } from 'src/app/modals/raices-sanas-modal/raices-sanas-modal.page';
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


  async raicessanasModal(){
    const modal = await this.modalCtrl.create({
      component: RaicesSanasModalPage
    })

    await modal.present();
  }

  async presenciabolitasModal(){
    const modal = await this.modalCtrl.create({
      component: PresenciaBolitasModalPage
    })

    await modal.present();
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
