import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SarnapolvorientaModalPage } from 'src/app/modals/sarnapolvorienta-modal/sarnapolvorienta-modal.page';

@Component({
  selector: 'app-sarnapolvorienta-image',
  templateUrl: './sarnapolvorienta-image.page.html',
  styleUrls: ['./sarnapolvorienta-image.page.scss'],
})
export class SarnapolvorientaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async sarnapolvorientaModal(){
    const modal = await this.modalCtrl.create({
      component: SarnapolvorientaModalPage
    })

    await modal.present();
  }

}
