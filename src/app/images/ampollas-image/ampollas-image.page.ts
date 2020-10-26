import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AmpollasModalPage } from 'src/app/modals/ampollas-modal/ampollas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-ampollas-image',
  templateUrl: './ampollas-image.page.html',
  styleUrls: ['./ampollas-image.page.scss'],
})
export class AmpollasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async ampollasModal(){
    const modal = await this.modalCtrl.create({
      component: AmpollasModalPage
    })

    await modal.present();
  }

}
