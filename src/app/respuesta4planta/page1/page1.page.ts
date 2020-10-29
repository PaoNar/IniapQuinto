import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeficienciasImagePage } from 'src/app/images/deficiencias-image/deficiencias-image.page';
import { VirosisImagePage } from 'src/app/images/virosis-image/virosis-image.page';
import { VirosisModalPage } from 'src/app/modals/virosis-modal/virosis-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

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
  

  // imagenes

  async virosisImage(){
    const modal = await this.modalCtrl.create({
      component: VirosisImagePage
    })

    await modal.present();
  }

  async deficienciasImage(){
    const modal = await this.modalCtrl.create({
      component: DeficienciasImagePage
    })

    await modal.present();
  }

}
