import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseTalloModalPage } from 'src/app/modals/base-tallo-modal/base-tallo-modal.page';
import { ManchaNegraModalPage } from 'src/app/modals/mancha-negra-modal/mancha-negra-modal.page';
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


  async basetalloModal(){
    const modal = await this.modalCtrl.create({
      component: BaseTalloModalPage
    })

    await modal.present();
  }

  async manchanegraModal(){
    const modal = await this.modalCtrl.create({
      component: ManchaNegraModalPage
    })

    await modal.present();
  }

}
