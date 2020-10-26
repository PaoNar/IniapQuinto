import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RaizModalPage } from 'src/app/modals/raiz-modal/raiz-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-raiz-image',
  templateUrl: './raiz-image.page.html',
  styleUrls: ['./raiz-image.page.scss'],
})
export class RaizImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async raizModal(){
    const modal = await this.modalCtrl.create({
      component: RaizModalPage
    })
    await modal.present();
  }

}
