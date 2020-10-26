import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasMordidasModalPage } from 'src/app/modals/hojas-mordidas-modal/hojas-mordidas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasmordidas-image',
  templateUrl: './hojasmordidas-image.page.html',
  styleUrls: ['./hojasmordidas-image.page.scss'],
})
export class HojasmordidasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async hojasmordidasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasMordidasModalPage
    })
    await modal.present();
  }

}
