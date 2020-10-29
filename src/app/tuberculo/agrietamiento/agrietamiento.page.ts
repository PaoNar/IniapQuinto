import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgrietamientoImagePage } from 'src/app/images/agrietamiento-image/agrietamiento-image.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-agrietamiento',
  templateUrl: './agrietamiento.page.html',
  styleUrls: ['./agrietamiento.page.scss'],
})
export class AgrietamientoPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {}
  
    // imagenes
  
    async agrietamientoImage(){
      const modal = await this.modalCtrl.create({
        component: AgrietamientoImagePage
      })
  
      await modal.present();
    }

}
