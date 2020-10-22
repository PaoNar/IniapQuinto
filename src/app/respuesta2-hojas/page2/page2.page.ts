import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanchaModalPage } from 'src/app/modals/lancha-modal/lancha-modal.page';
import { PuntaMoradaModalPage } from 'src/app/modals/punta-morada-modal/punta-morada-modal.page';
import { RoyaModalPage } from 'src/app/modals/roya-modal/roya-modal.page';
import { TripsModalPage } from 'src/app/modals/trips-modal/trips-modal.page';
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
    
  async royaModal(){
    const modal = await this.modalCtrl.create({
      component: RoyaModalPage
    })

    await modal.present();
  }

  async lanchaModal(){
    const modal = await this.modalCtrl.create({
      component: LanchaModalPage
    })

    await modal.present();
  }


  async tripsModal(){
    const modal = await this.modalCtrl.create({
      component: TripsModalPage
    })

    await modal.present();
  }

  async puntamoradaModal(){
    const modal = await this.modalCtrl.create({
      component: PuntaMoradaModalPage
    })

    await modal.present();
  }

}
