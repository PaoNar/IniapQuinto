import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PienegroImagePage } from 'src/app/images/pienegro-image/pienegro-image.page';
import { PienegroModalPage } from 'src/app/modals/pienegro-modal/pienegro-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-pienegro',
  templateUrl: './pienegro.page.html',
  styleUrls: ['./pienegro.page.scss'],
})
export class PienegroPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    }

    ngOnInit(): void {}

  async pienegroModal(){
    const modal = await this.modalCtrl.create({
      component: PienegroModalPage
    })

    await modal.present();
  }

  // imagenes

  async pienegroImage(){
    const modal = await this.modalCtrl.create({
      component: PienegroImagePage
    })

    await modal.present();
  }
}
