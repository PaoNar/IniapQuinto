import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasMinadasModalPage } from 'src/app/modals/hojas-minadas-modal/hojas-minadas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasminadas-image',
  templateUrl: './hojasminadas-image.page.html',
  styleUrls: ['./hojasminadas-image.page.scss'],
})
export class HojasminadasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async hojasminadasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasMinadasModalPage
    })
    await modal.present();
  }

}
