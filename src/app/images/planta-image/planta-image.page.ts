import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodaPlantaPage } from 'src/app/Modals/toda-planta/toda-planta.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-planta-image',
  templateUrl: './planta-image.page.html',
  styleUrls: ['./planta-image.page.scss'],
})
export class PlantaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async todalaPlantaModal(){
    const modal = await this.modalCtrl.create({
      component: TodaPlantaPage
    })
    await modal.present();
  }

}
