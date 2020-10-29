import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PuntamoradaImagePage } from 'src/app/images/puntamorada-image/puntamorada-image.page';
import { PuntamoradaModalPage } from 'src/app/modals/puntamorada-modal/puntamorada-modal.page';
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
    
    async puntamoradaModal(){
      const modal = await this.modalCtrl.create({
        component: PuntamoradaModalPage
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
