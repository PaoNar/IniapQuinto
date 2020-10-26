import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MosaicoModalPage } from 'src/app/modals/mosaico-modal/mosaico-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasmosaico-image',
  templateUrl: './hojasmosaico-image.page.html',
  styleUrls: ['./hojasmosaico-image.page.scss'],
})
export class HojasmosaicoImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async hojasmosaicoModal(){
    const modal = await this.modalCtrl.create({
      component: MosaicoModalPage
    })
    await modal.present();
  }

}
