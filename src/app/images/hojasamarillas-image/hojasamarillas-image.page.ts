import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasAmarillasModalPage } from 'src/app/modals/hojas-amarillas-modal/hojas-amarillas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasamarillas-image',
  templateUrl: './hojasamarillas-image.page.html',
  styleUrls: ['./hojasamarillas-image.page.scss'],
})
export class HojasamarillasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async hojasamarillasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasAmarillasModalPage
    })

    await modal.present();
  }

}
