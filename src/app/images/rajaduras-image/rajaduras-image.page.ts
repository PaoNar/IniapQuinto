import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RajadurasModalPage } from 'src/app/modals/rajaduras-modal/rajaduras-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-rajaduras-image',
  templateUrl: './rajaduras-image.page.html',
  styleUrls: ['./rajaduras-image.page.scss'],
})
export class RajadurasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async rajadurasModal(){
    const modal = await this.modalCtrl.create({
      component: RajadurasModalPage
    })
    await modal.present();
  }

}
