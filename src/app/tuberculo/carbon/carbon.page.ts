import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarbonImagePage } from 'src/app/images/carbon-image/carbon-image.page';
import { CarbonModalPage } from 'src/app/modals/carbon-modal/carbon-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-carbon',
  templateUrl: './carbon.page.html',
  styleUrls: ['./carbon.page.scss'],
})
export class CarbonPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {}
    
    async carbonModal(){
      const modal = await this.modalCtrl.create({
        component: CarbonModalPage
      })
  
      await modal.present();
    }
  
    // imagenes
  
    async carbonImage(){
      const modal = await this.modalCtrl.create({
        component: CarbonImagePage
      })
  
      await modal.present();
    }

}
