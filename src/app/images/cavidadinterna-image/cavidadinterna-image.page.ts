import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CavidadInternaModalPage } from 'src/app/modals/cavidad-interna-modal/cavidad-interna-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-cavidadinterna-image',
  templateUrl: './cavidadinterna-image.page.html',
  styleUrls: ['./cavidadinterna-image.page.scss'],
})
export class CavidadinternaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async cavidadModal(){
    const modal = await this.modalCtrl.create({
      component: CavidadInternaModalPage
    })

    await modal.present();
  }

}
