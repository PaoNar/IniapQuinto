import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojascomidasImagePage } from 'src/app/images/hojascomidas-image/hojascomidas-image.page';
import { HojasminadasImagePage } from 'src/app/images/hojasminadas-image/hojasminadas-image.page';
import { PresenciabolitasImagePage } from 'src/app/images/presenciabolitas-image/presenciabolitas-image.page';
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


  // async hojasminadasModal(){
  //   const modal = await this.modalCtrl.create({
  //     component: HojasMinadasModalPage
  //   })

  //   await modal.present();
  // }

  // async hojascomidasModal(){
  //   const modal = await this.modalCtrl.create({
  //     component: HojasComidasModalPage
  //   })

  //   await modal.present();
  // }

  // async presenciabolitasModal(){
  //   const modal = await this.modalCtrl.create({
  //     component: PresenciaBolitasModalPage
  //   })

  //   await modal.present();
  // }

  // Imagenes

  async hojasminadasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasminadasImagePage
    })

    await modal.present();
  }

  async hojascomidasImage(){
    const modal = await this.modalCtrl.create({
      component: HojascomidasImagePage
    })

    await modal.present();
  }

  async presenciabolitasImage(){
    const modal = await this.modalCtrl.create({
      component: PresenciabolitasImagePage
    })

    await modal.present();
  }

}
