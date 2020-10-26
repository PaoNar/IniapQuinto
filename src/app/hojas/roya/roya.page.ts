import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RoyaImagePage } from 'src/app/images/roya-image/roya-image.page';
import { RoyaModalPage } from 'src/app/modals/roya-modal/roya-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-roya',
  templateUrl: './roya.page.html',
  styleUrls: ['./roya.page.scss'],
})
export class RoyaPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }
    
  async royaModal(){
    const modal = await this.modalCtrl.create({
      component: RoyaModalPage
    })

    await modal.present();
  }

  // imagenes

  async royaImage(){
    const modal = await this.modalCtrl.create({
      component: RoyaImagePage
    })

    await modal.present();
  }
}
