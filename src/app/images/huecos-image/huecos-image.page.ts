import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HuecosModalPage } from 'src/app/modals/huecos-modal/huecos-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-huecos-image',
  templateUrl: './huecos-image.page.html',
  styleUrls: ['./huecos-image.page.scss'],
})
export class HuecosImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async huecosModal(){
    const modal = await this.modalCtrl.create({
      component:HuecosModalPage
    })
    await modal.present();
  }

}
