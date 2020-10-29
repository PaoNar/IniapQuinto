import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GusanoblancoModalPage } from 'src/app/modals/gusanoblanco-modal/gusanoblanco-modal.page';

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
      component: GusanoblancoModalPage
    })

    await modal.present();
  }

}
