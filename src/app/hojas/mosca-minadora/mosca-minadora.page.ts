import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoscaminadoraImagePage } from 'src/app/images/moscaminadora-image/moscaminadora-image.page';
import { MoscaminadoraModalPage } from 'src/app/modals/moscaminadora-modal/moscaminadora-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-mosca-minadora',
  templateUrl: './mosca-minadora.page.html',
  styleUrls: ['./mosca-minadora.page.scss'],
})
export class MoscaMinadoraPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }

  async moscaminadoraModal(){
    const modal = await this.modalCtrl.create({
      component: MoscaminadoraModalPage
    })

    await modal.present();
  }

  // imagenes

  async moscaminadoraImage(){
    const modal = await this.modalCtrl.create({
      component:MoscaminadoraImagePage
    })

    await modal.present();
  }

}
