import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PresenciaTuberculosModalPage } from 'src/app/modals/presencia-tuberculos-modal/presencia-tuberculos-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-presenciatuberculos-image',
  templateUrl: './presenciatuberculos-image.page.html',
  styleUrls: ['./presenciatuberculos-image.page.scss'],
})
export class PresenciatuberculosImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async presenciatuberculosModal(){
    const modal = await this.modalCtrl.create({
      component: PresenciaTuberculosModalPage
    })
    await modal.present();
  }

}
