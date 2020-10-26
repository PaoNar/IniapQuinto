import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseTalloModalPage } from 'src/app/modals/base-tallo-modal/base-tallo-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-basetallo-image',
  templateUrl: './basetallo-image.page.html',
  styleUrls: ['./basetallo-image.page.scss'],
})
export class BasetalloImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async basetalloModal(){
    const modal = await this.modalCtrl.create({
      component: BaseTalloModalPage
    })

    await modal.present();
  }

}
