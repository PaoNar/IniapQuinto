import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PienegroModalPage } from 'src/app/modals/pienegro-modal/pienegro-modal.page';

@Component({
  selector: 'app-pienegro-image',
  templateUrl: './pienegro-image.page.html',
  styleUrls: ['./pienegro-image.page.scss'],
})
export class PienegroImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async pienegroModal(){
    const modal = await this.modalCtrl.create({
      component: PienegroModalPage
    })

    await modal.present();
  }


}
