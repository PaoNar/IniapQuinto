import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VirosisModalPage } from 'src/app/modals/virosis-modal/virosis-modal.page';

@Component({
  selector: 'app-virosis-image',
  templateUrl: './virosis-image.page.html',
  styleUrls: ['./virosis-image.page.scss'],
})
export class VirosisImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async virosisModal(){
    const modal = await this.modalCtrl.create({
      component: VirosisModalPage
    })

    await modal.present();
  }


}
