import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasComidasModalPage } from 'src/app/modals/hojas-comidas-modal/hojas-comidas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojascomidas-image',
  templateUrl: './hojascomidas-image.page.html',
  styleUrls: ['./hojascomidas-image.page.scss'],
})
export class HojascomidasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async hojascomidasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasComidasModalPage
    })
    await modal.present();
  }

}
