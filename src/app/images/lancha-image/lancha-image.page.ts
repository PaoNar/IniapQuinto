import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanchaModalPage } from 'src/app/modals/lancha-modal/lancha-modal.page';

@Component({
  selector: 'app-lancha-image',
  templateUrl: './lancha-image.page.html',
  styleUrls: ['./lancha-image.page.scss'],
})
export class LanchaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async lanchaModal(){
    const modal = await this.modalCtrl.create({
      component: LanchaModalPage
    })

    await modal.present();
  }

}
