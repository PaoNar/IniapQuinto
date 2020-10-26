import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SarnapolvorientaImagePage } from 'src/app/images/sarnapolvorienta-image/sarnapolvorienta-image.page';
import { SarnapolvorientaModalPage } from 'src/app/modals/sarnapolvorienta-modal/sarnapolvorienta-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-sarna',
  templateUrl: './sarna.page.html',
  styleUrls: ['./sarna.page.scss'],
})
export class SarnaPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {}
    
    async sarnaModal(){
      const modal = await this.modalCtrl.create({
        component: SarnapolvorientaModalPage
      })
  
      await modal.present();
    }
  
    // imagenes
  
    async sarnaImage(){
      const modal = await this.modalCtrl.create({
        component: SarnapolvorientaImagePage
      })
  
      await modal.present();
    }

}
