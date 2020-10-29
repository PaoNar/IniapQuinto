import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HeladaModalPage } from 'src/app/modals/helada-modal/helada-modal.page';

@Component({
  selector: 'app-helada-image',
  templateUrl: './helada-image.page.html',
  styleUrls: ['./helada-image.page.scss'],
})
export class HeladaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async heladaModal(){
    const modal = await this.modalCtrl.create({
      component: HeladaModalPage
    })

    await modal.present();
  }

}
