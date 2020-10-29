import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CostranegraImagePage } from 'src/app/images/costranegra-image/costranegra-image.page';
import { PuntamoradaImagePage } from 'src/app/images/puntamorada-image/puntamorada-image.page';
import { CostranegraModalPage } from 'src/app/modals/costranegra-modal/costranegra-modal.page';
import { PuntamoradaModalPage } from 'src/app/modals/puntamorada-modal/puntamorada-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }
    
  async costranegraModal(){
    const modal = await this.modalCtrl.create({
      component: CostranegraModalPage
    })

    await modal.present();
  }
  async puntamoradaModal(){
    const modal = await this.modalCtrl.create({
      component: PuntamoradaModalPage
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

  async puntamoradaImage(){
    const modal = await this.modalCtrl.create({
      component: PuntamoradaImagePage
    })

    await modal.present();
  }


}
