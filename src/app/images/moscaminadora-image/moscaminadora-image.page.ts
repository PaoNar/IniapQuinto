import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoscaminadoraModalPage } from 'src/app/modals/moscaminadora-modal/moscaminadora-modal.page';

@Component({
  selector: 'app-moscaminadora-image',
  templateUrl: './moscaminadora-image.page.html',
  styleUrls: ['./moscaminadora-image.page.scss'],
})
export class MoscaminadoraImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async moscaminadoraModal(){
    const modal = await this.modalCtrl.create({
      component: MoscaminadoraModalPage
    })

    await modal.present();
  }


}
