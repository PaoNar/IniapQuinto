import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PuntamoradaImagePage } from 'src/app/images/puntamorada-image/puntamorada-image.page';
import { PuntaMoradaModalPage } from 'src/app/modals/punta-morada-modal/punta-morada-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-puntamorada',
  templateUrl: './puntamorada.page.html',
  styleUrls: ['./puntamorada.page.scss'],
})
export class PuntamoradaPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }
    
    async puntamoradaModal(){
      const modal = await this.modalCtrl.create({
        component: PuntaMoradaModalPage
      })
  
      await modal.present();
    }
  
    // imagenes
  
    async puntamoradaImage(){
      const modal = await this.modalCtrl.create({
        component: PuntamoradaImagePage
      })
  
      await modal.present();
    }

}
