import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PolillaImagePage } from 'src/app/images/polilla-image/polilla-image.page';
import { PolillaModalPage } from 'src/app/modals/polilla-modal/polilla-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-polilla',
  templateUrl: './polilla.page.html',
  styleUrls: ['./polilla.page.scss'],
})
export class PolillaPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {}
    
    async polillaModal(){
      const modal = await this.modalCtrl.create({
        component: PolillaModalPage
      })
  
      await modal.present();
    }
  
    // imagenes
  
    async polillaImage(){
      const modal = await this.modalCtrl.create({
        component: PolillaImagePage
      })
  
      await modal.present();
    }

}
