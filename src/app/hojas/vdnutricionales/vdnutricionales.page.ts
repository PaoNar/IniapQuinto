import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VirosisImagePage } from 'src/app/images/virosis-image/virosis-image.page';
import { VirosisModalPage } from 'src/app/modals/virosis-modal/virosis-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-vdnutricionales',
  templateUrl: './vdnutricionales.page.html',
  styleUrls: ['./vdnutricionales.page.scss'],
})
export class VdnutricionalesPage implements OnInit {

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
}
