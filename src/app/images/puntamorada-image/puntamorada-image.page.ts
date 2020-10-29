import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PuntamoradaModalPage } from 'src/app/modals/puntamorada-modal/puntamorada-modal.page';

@Component({
  selector: 'app-puntamorada-image',
  templateUrl: './puntamorada-image.page.html',
  styleUrls: ['./puntamorada-image.page.scss'],
})
export class PuntamoradaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async puntamoradaModal(){
    const modal = await this.modalCtrl.create({
      component: PuntamoradaModalPage
    })

    await modal.present();
  }

}
