import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GusanoblancoImagePage } from 'src/app/images/gusanoblanco-image/gusanoblanco-image.page';
import { GusanoblancoModalPage } from 'src/app/modals/gusanoblanco-modal/gusanoblanco-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-gusano-blanco',
  templateUrl: './gusano-blanco.page.html',
  styleUrls: ['./gusano-blanco.page.scss'],
})
export class GusanoBlancoPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    }

    ngOnInit(): void {
      
    }

  async gusanoblancoModal(){
    const modal = await this.modalCtrl.create({
      component: GusanoblancoModalPage
    })

    await modal.present();
  }

  // imagenes

  async gusanoblancoImage(){
    const modal = await this.modalCtrl.create({
      component: GusanoblancoImagePage
    })

    await modal.present();
  }

}
