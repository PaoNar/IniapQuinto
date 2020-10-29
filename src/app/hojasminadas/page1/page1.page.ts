import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoscaminadoraImagePage } from 'src/app/images/moscaminadora-image/moscaminadora-image.page';
import { PolillaImagePage } from 'src/app/images/polilla-image/polilla-image.page';
import { MoscaminadoraModalPage } from 'src/app/modals/moscaminadora-modal/moscaminadora-modal.page';
import { PolillaModalPage } from 'src/app/modals/polilla-modal/polilla-modal.page';
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
    
  async moscaminadoraModal(){
    const modal = await this.modalCtrl.create({
      component: MoscaminadoraModalPage
    })

    await modal.present();
  }
  async polillaModal(){
    const modal = await this.modalCtrl.create({
      component: PolillaModalPage
    })

    await modal.present();
  }
  

  // imagenes

  async moscaminadoraImage(){
    const modal = await this.modalCtrl.create({
      component: MoscaminadoraImagePage
    })

    await modal.present();
  }

  async polillaImage(){
    const modal = await this.modalCtrl.create({
      component: PolillaImagePage
    })

    await modal.present();
  }

}
