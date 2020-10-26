import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasMoradasModalPage } from 'src/app/modals/hojas-moradas-modal/hojas-moradas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasmoradas-image',
  templateUrl: './hojasmoradas-image.page.html',
  styleUrls: ['./hojasmoradas-image.page.scss'],
})
export class HojasmoradasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async hojasmoradasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasMoradasModalPage
    })

    await modal.present();
  }

}
