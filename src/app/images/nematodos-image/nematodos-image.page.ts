import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NematodosModalPage } from 'src/app/Modals/nematodos-modal/nematodos-modal.page';

@Component({
  selector: 'app-nematodos-image',
  templateUrl: './nematodos-image.page.html',
  styleUrls: ['./nematodos-image.page.scss'],
})
export class NematodosImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async nematodosModal(){
    const modal = await this.modalCtrl.create({
      component: NematodosModalPage
    })

    await modal.present();
  }

}
