import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CostraNegraModalPage } from 'src/app/modals/costra-negra-modal/costra-negra-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-costranegra-image',
  templateUrl: './costranegra-image.page.html',
  styleUrls: ['./costranegra-image.page.scss'],
})
export class CostranegraImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async costranegraModal(){
    const modal = await this.modalCtrl.create({
      component: CostraNegraModalPage
    })

    await modal.present();
  }

}
