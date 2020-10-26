import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CostranegraImagePage } from 'src/app/images/costranegra-image/costranegra-image.page';
import { CostraNegraModalPage } from 'src/app/modals/costra-negra-modal/costra-negra-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-costra-negra',
  templateUrl: './costra-negra.page.html',
  styleUrls: ['./costra-negra.page.scss'],
})
export class CostraNegraPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {}
    
    async costranegraModal(){
      const modal = await this.modalCtrl.create({
        component: CostraNegraModalPage
      })
  
      await modal.present();
    }
  
    // imagenes
  
    async costranegraImage(){
      const modal = await this.modalCtrl.create({
        component: CostranegraImagePage
      })
  
      await modal.present();
    }

}
