import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PulguillaModalPage } from 'src/app/modals/pulguilla-modal/pulguilla-modal.page';

@Component({
  selector: 'app-pulguilla-image',
  templateUrl: './pulguilla-image.page.html',
  styleUrls: ['./pulguilla-image.page.scss'],
})
export class PulguillaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async pulguillaModal(){
    const modal = await this.modalCtrl.create({
      component: PulguillaModalPage
    })

    await modal.present();
  }

}
