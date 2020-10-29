import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnrrollamientoImagePage } from 'src/app/images/enrrollamiento-image/enrrollamiento-image.page';
import { HojasamarillasImagePage } from 'src/app/images/hojasamarillas-image/hojasamarillas-image.page';
import { HojasmanchasImagePage } from 'src/app/images/hojasmanchas-image/hojasmanchas-image.page';
import { HojasmarchitasImagePage } from 'src/app/images/hojasmarchitas-image/hojasmarchitas-image.page';
import { HojasmoradasImagePage } from 'src/app/images/hojasmoradas-image/hojasmoradas-image.page';
import { HojasmordidasImagePage } from 'src/app/images/hojasmordidas-image/hojasmordidas-image.page';
import { HojasmosaicoImagePage } from 'src/app/images/hojasmosaico-image/hojasmosaico-image.page';
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

  // imagenes
  async hojasmanchaImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmanchasImagePage
    })

    await modal.present();
  }

  async hojasmoradasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmoradasImagePage
    })

    await modal.present();
  }

  async hojasamarillasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasamarillasImagePage
    })

    await modal.present();
  }

  async hojasmarchitasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmarchitasImagePage
    })

    await modal.present();
  }
  async enrrollamientoImage(){
    const modal = await this.modalCtrl.create({
      component: EnrrollamientoImagePage
    })

    await modal.present();
  }

  async hojasmordidasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmordidasImagePage
    })

    await modal.present();
  }

  async hojasmosaicoImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmosaicoImagePage
    })

    await modal.present();
  }


}
