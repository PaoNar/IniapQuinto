import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PulgonesModalPage } from 'src/app/modals/pulgones-modal/pulgones-modal.page';

@Component({
  selector: 'app-pulgones-image',
  templateUrl: './pulgones-image.page.html',
  styleUrls: ['./pulgones-image.page.scss'],
})
export class PulgonesImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async pulgonesModal(){
    const modal = await this.modalCtrl.create({
      component: PulgonesModalPage
    })
    await modal.present();
  }

}
