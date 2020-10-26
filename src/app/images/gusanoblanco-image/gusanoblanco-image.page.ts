import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GusanoBlancoModalPage } from 'src/app/Modals/gusano-blanco-modal/gusano-blanco-modal.page';

@Component({
  selector: 'app-gusanoblanco-image',
  templateUrl: './gusanoblanco-image.page.html',
  styleUrls: ['./gusanoblanco-image.page.scss'],
})
export class GusanoblancoImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async gusanoblancoModal(){
    const modal = await this.modalCtrl.create({
      component: GusanoBlancoModalPage
    })

    await modal.present();
  }

}
