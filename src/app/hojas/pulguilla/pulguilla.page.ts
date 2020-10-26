import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PulguillaImagePage } from 'src/app/images/pulguilla-image/pulguilla-image.page';
import { PulguillaModalPage } from 'src/app/modals/pulguilla-modal/pulguilla-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-pulguilla',
  templateUrl: './pulguilla.page.html',
  styleUrls: ['./pulguilla.page.scss'],
})
export class PulguillaPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    }

    ngOnInit(): void {}

  async pulguillaModal(){
    const modal = await this.modalCtrl.create({
      component: PulguillaModalPage
    })

    await modal.present();
  }

  // imagenes

  async pulguillaImage(){
    const modal = await this.modalCtrl.create({
      component: PulguillaImagePage
    })

    await modal.present();
  }
}
