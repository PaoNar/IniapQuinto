import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PustulasModalPage } from 'src/app/modals/pustulas-modal/pustulas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-pustulas-image',
  templateUrl: './pustulas-image.page.html',
  styleUrls: ['./pustulas-image.page.scss'],
})
export class PustulasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async pustulasModal(){
    const modal = await this.modalCtrl.create({
      component: PustulasModalPage
    })

    await modal.present();
  }

}
