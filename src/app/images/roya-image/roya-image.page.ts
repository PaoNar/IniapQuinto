import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RoyaModalPage } from 'src/app/modals/roya-modal/roya-modal.page';

@Component({
  selector: 'app-roya-image',
  templateUrl: './roya-image.page.html',
  styleUrls: ['./roya-image.page.scss'],
})
export class RoyaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async royaModal(){
    const modal = await this.modalCtrl.create({
      component: RoyaModalPage
    })

    await modal.present();
  }

}
