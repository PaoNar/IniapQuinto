import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CostranegraImagePage } from 'src/app/images/costranegra-image/costranegra-image.page';
import { CostranegraModalPage } from 'src/app/modals/costranegra-modal/costranegra-modal.page';
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
        component: CostranegraModalPage
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
