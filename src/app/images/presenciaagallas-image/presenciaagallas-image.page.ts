import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PresenciaAgallasModalPage } from 'src/app/modals/presencia-agallas-modal/presencia-agallas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-presenciaagallas-image',
  templateUrl: './presenciaagallas-image.page.html',
  styleUrls: ['./presenciaagallas-image.page.scss'],
})
export class PresenciaagallasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async presenciaagallasModal(){
    const modal = await this.modalCtrl.create({
      component:PresenciaAgallasModalPage
    })
    await modal.present();
  }

}
