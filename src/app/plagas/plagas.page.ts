import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../enfermedad/modal/modal.page';
import { Pregunta2Page } from '../enfermedad/pregunta2/pregunta2.page';
import { Pregunta3Page } from '../enfermedad/pregunta3/pregunta3.page';
import { VariablesService } from '../variables.service';

@Component({
  selector: 'app-plagas',
  templateUrl: './plagas.page.html',
  styleUrls: ['./plagas.page.scss'],
})
export class PlagasPage implements OnInit {

  constructor(public nombre: VariablesService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ModalPage
    })

    await modal.present();
  }

  async preg2Modal(){
    const modal = await this.modalCtrl.create({
      component: Pregunta2Page
    })

    await modal.present();
  }


  async preg3Modal(){
    const modal = await this.modalCtrl.create({
      component: Pregunta3Page
    })

    await modal.present();
  }

  

}
