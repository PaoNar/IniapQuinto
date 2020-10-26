import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasPage } from 'src/app/Modals/hojas/hojas.page';
import { TodaPlantaPage } from 'src/app/Modals/toda-planta/toda-planta.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojas-image',
  templateUrl: './hojas-image.page.html',
  styleUrls: ['./hojas-image.page.scss'],
})
export class HojasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async hojasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasPage
    })
    await modal.present();
  }

}
