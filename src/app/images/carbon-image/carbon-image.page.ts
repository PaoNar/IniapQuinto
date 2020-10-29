import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarbonModalPage } from 'src/app/modals/carbon-modal/carbon-modal.page';

@Component({
  selector: 'app-carbon-image',
  templateUrl: './carbon-image.page.html',
  styleUrls: ['./carbon-image.page.scss'],
})
export class CarbonImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }


  async carbonModal(){
    const modal = await this.modalCtrl.create({
      component: CarbonModalPage
    })

    await modal.present();
  }


}
