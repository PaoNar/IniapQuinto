import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TripsImagePage } from 'src/app/images/trips-image/trips-image.page';
import { TripsModalPage } from 'src/app/modals/trips-modal/trips-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-lancha',
  templateUrl: './lancha.page.html',
  styleUrls: ['./lancha.page.scss'],
})
export class LanchaPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }

  async tripsModal(){
    const modal = await this.modalCtrl.create({
      component: TripsModalPage
    })

    await modal.present();
  }

  // imagenes

  async tripsImage(){
    const modal = await this.modalCtrl.create({
      component: TripsImagePage
    })

    await modal.present();
  }

}
