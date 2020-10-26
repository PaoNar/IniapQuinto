import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasMarchitasModalPage } from 'src/app/modals/hojas-marchitas-modal/hojas-marchitas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasmarchitas-image',
  templateUrl: './hojasmarchitas-image.page.html',
  styleUrls: ['./hojasmarchitas-image.page.scss'],
})
export class HojasmarchitasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async hojasmarchitasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasMarchitasModalPage
    })

    await modal.present();
  }

}
