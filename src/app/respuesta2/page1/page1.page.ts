import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasmoradasImagePage } from 'src/app/images/hojasmoradas-image/hojasmoradas-image.page';
import { ManchacafeImagePage } from 'src/app/images/manchacafe-image/manchacafe-image.page';
import { ManchasplateadoImagePage } from 'src/app/images/manchasplateado-image/manchasplateado-image.page';
import { PustulasImagePage } from 'src/app/images/pustulas-image/pustulas-image.page';
import { HojasMoradasModalPage } from 'src/app/modals/hojas-moradas-modal/hojas-moradas-modal.page';
import { ManchaCafeModalPage } from 'src/app/modals/mancha-cafe-modal/mancha-cafe-modal.page';
import { ManchasPlateadoModalPage } from 'src/app/modals/manchas-plateado-modal/manchas-plateado-modal.page';
import { PustulasModalPage } from 'src/app/modals/pustulas-modal/pustulas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(public nombre: VariablesService, 
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }


  async manchacafeModal(){
    const modal = await this.modalCtrl.create({
      component: ManchaCafeModalPage
    })

    await modal.present();
  }

  async pustulasModal(){
    const modal = await this.modalCtrl.create({
      component: PustulasModalPage
    })

    await modal.present();
  }


  async manchasplateadoModal(){
    const modal = await this.modalCtrl.create({
      component: ManchasPlateadoModalPage
    })

    await modal.present();
  }
  

  async hojasmoradasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasMoradasModalPage
    })
    await modal.present();
  }


  // imagenes

  async manchacafeImage(){
    const modal = await this.modalCtrl.create({
      component: ManchacafeImagePage
    })
    await modal.present();
  }

  async hojasmoradasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmoradasImagePage
    })
    await modal.present();
  }

  async pustulasImage(){
    const modal = await this.modalCtrl.create({
      component: PustulasImagePage
    })
    await modal.present();
  }

  async manchasplateadoImage(){
    const modal = await this.modalCtrl.create({
      component: ManchasplateadoImagePage
    })
    await modal.present();
  }

}
