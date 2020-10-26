import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlantaspequenasModalPage } from 'src/app/modals/plantaspequenas-modal/plantaspequenas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-plantaspequenas-image',
  templateUrl: './plantaspequenas-image.page.html',
  styleUrls: ['./plantaspequenas-image.page.scss'],
})
export class PlantaspequenasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async plantaspequenasModal(){
    const modal = await this.modalCtrl.create({
      component: PlantaspequenasModalPage
    })
    await modal.present();
  }

}
