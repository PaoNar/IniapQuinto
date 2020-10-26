import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PolillaModalPage } from 'src/app/modals/polilla-modal/polilla-modal.page';

@Component({
  selector: 'app-polilla-image',
  templateUrl: './polilla-image.page.html',
  styleUrls: ['./polilla-image.page.scss'],
})
export class PolillaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async polillaModal(){
    const modal = await this.modalCtrl.create({
      component: PolillaModalPage
    })

    await modal.present();
  }

}
