import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnrrolamientoModalPage } from 'src/app/Modals/enrrolamiento-modal/enrrolamiento-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-enrrollamiento-image',
  templateUrl: './enrrollamiento-image.page.html',
  styleUrls: ['./enrrollamiento-image.page.scss'],
})
export class EnrrollamientoImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async enrrollamientoModal(){
    const modal = await this.modalCtrl.create({
      component: EnrrolamientoModalPage
    })
    await modal.present();
  }

}
