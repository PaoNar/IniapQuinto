import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasComidasModalPage } from 'src/app/modals/hojas-comidas-modal/hojas-comidas-modal.page';
import { HojasMinadasModalPage } from 'src/app/Modals/hojas-minadas-modal/hojas-minadas-modal.page';
import { PresenciaBolitasModalPage } from 'src/app/modals/presencia-bolitas-modal/presencia-bolitas-modal.page';
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


  async hojasminadasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasMinadasModalPage
    })

    await modal.present();
  }

  async hojascomidasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasComidasModalPage
    })

    await modal.present();
  }

  async presenciabolitasModal(){
    const modal = await this.modalCtrl.create({
      component: PresenciaBolitasModalPage
    })

    await modal.present();
  }

}
