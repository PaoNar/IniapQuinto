import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GrietasModalPage } from 'src/app/modals/grietas-modal/grietas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-grietas-image',
  templateUrl: './grietas-image.page.html',
  styleUrls: ['./grietas-image.page.scss'],
})
export class GrietasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async grietasModal(){
    const modal = await this.modalCtrl.create({
      component: GrietasModalPage
    })

    await modal.present();
  }

}
