import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TripsModalPage } from 'src/app/modals/trips-modal/trips-modal.page';

@Component({
  selector: 'app-trips-image',
  templateUrl: './trips-image.page.html',
  styleUrls: ['./trips-image.page.scss'],
})
export class TripsImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  async tripsModal(){
    const modal = await this.modalCtrl.create({
      component: TripsModalPage
    })

    await modal.present();
  }


}
