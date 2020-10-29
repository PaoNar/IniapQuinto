import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanchaImagePage } from 'src/app/images/lancha-image/lancha-image.page';
import { PuntamoradaImagePage } from 'src/app/images/puntamorada-image/puntamorada-image.page';
import { RoyaImagePage } from 'src/app/images/roya-image/roya-image.page';
import { TripsImagePage } from 'src/app/images/trips-image/trips-image.page';
import { LanchaModalPage } from 'src/app/modals/lancha-modal/lancha-modal.page';
import { PuntamoradaModalPage } from 'src/app/modals/puntamorada-modal/puntamorada-modal.page';
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
      component: PuntamoradaModalPage
    })

    await modal.present();
  }

  // Imagenes

  async royaImage(){
    const modal = await this.modalCtrl.create({
      component: RoyaImagePage
    })

    await modal.present();
  }

  async lanchaImage(){
    const modal = await this.modalCtrl.create({
      component: LanchaImagePage
    })

    await modal.present();
  }


  async tripsImage(){
    const modal = await this.modalCtrl.create({
      component: TripsImagePage
    })

    await modal.present();
  }

  async puntamoradaImage(){
    const modal = await this.modalCtrl.create({
      component: PuntamoradaImagePage
    })

    await modal.present();
  }
}
