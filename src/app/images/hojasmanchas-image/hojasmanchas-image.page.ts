import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasManchasPage } from 'src/app/modals/hojas-manchas/hojas-manchas.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasmanchas-image',
  templateUrl: './hojasmanchas-image.page.html',
  styleUrls: ['./hojasmanchas-image.page.scss'],
})
export class HojasmanchasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async hojasmanchaModal(){
    const modal = await this.modalCtrl.create({
      component: HojasManchasPage
    })

    await modal.present();
  }

}
