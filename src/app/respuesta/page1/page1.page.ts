import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnrrollamientoplantaImagePage } from 'src/app/images/enrrollamientoplanta-image/enrrollamientoplanta-image.page';
import { HojasamarillasplantaImagePage } from 'src/app/images/hojasamarillasplanta-image/hojasamarillasplanta-image.page';
import { HojasmanchasplantaImagePage } from 'src/app/images/hojasmanchasplanta-image/hojasmanchasplanta-image.page';
import { HojasmarchitasImagePage } from 'src/app/images/hojasmarchitas-image/hojasmarchitas-image.page';
import { HojasmoradasImagePage } from 'src/app/images/hojasmoradas-image/hojasmoradas-image.page';
import { HojasmosaicoImagePage } from 'src/app/images/hojasmosaico-image/hojasmosaico-image.page';
import { PlantaspequenasImagePage } from 'src/app/images/plantaspequenas-image/plantaspequenas-image.page';
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

  // imagenes

  async hojasmanchasplantaImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmanchasplantaImagePage
    })

    await modal.present();
  }

  async hojasmoradasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmoradasImagePage
    })

    await modal.present();
  }


  async hojasamarillasplantaImage(){
    const modal = await this.modalCtrl.create({
      component: HojasamarillasplantaImagePage
    })

    await modal.present();
  }

  async hojasmarchitasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmarchitasImagePage
    })

    await modal.present();
  }

  async hojasmosaicoImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmosaicoImagePage
    })
    await modal.present();
  }

  async enrrollamientoplantaImage(){
    const modal = await this.modalCtrl.create({
      component: EnrrollamientoplantaImagePage
    })
    await modal.present();
  }

  async plantaspequenasImage(){
    const modal = await this.modalCtrl.create({
      component: PlantaspequenasImagePage
    })
    await modal.present();
  }

}
