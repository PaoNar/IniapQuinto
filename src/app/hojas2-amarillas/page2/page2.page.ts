import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PienegroImagePage } from 'src/app/images/pienegro-image/pienegro-image.page';
import { VirosisImagePage } from 'src/app/images/virosis-image/virosis-image.page';
import { DeficienciasnutricionalesModalPage } from 'src/app/modals/deficienciasnutricionales-modal/deficienciasnutricionales-modal.page';
import { PienegroModalPage } from 'src/app/modals/pienegro-modal/pienegro-modal.page';
import { VirosisModalPage } from 'src/app/modals/virosis-modal/virosis-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }
    
  async virosisModal(){
    const modal = await this.modalCtrl.create({
      component: VirosisModalPage
    })

    await modal.present();
  }

  async pienegroModal(){
    const modal = await this.modalCtrl.create({
      component: PienegroModalPage
    })

    await modal.present();
  }


  // async deficienciasnutricionalesModal(){
  //   const modal = await this.modalCtrl.create({
  //     component: DeficienciasnutricionalesModalPage
  //   })

  //   await modal.present();
  // }

  // imagenes

  async virosisImage(){
    const modal = await this.modalCtrl.create({
      component: VirosisImagePage
    })

    await modal.present();
  }

  async pienegroImage(){
    const modal = await this.modalCtrl.create({
      component: PienegroImagePage
    })

    await modal.present();
  }

  // async deficienciasImage(){
  //   const modal = await this.modalCtrl.create({
  //     component: DeficienciasImagePage
  //   })

  //   await modal.present();
  // }

}
