import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManchasPlateadoModalPage } from 'src/app/modals/manchas-plateado-modal/manchas-plateado-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-manchasplateado-image',
  templateUrl: './manchasplateado-image.page.html',
  styleUrls: ['./manchasplateado-image.page.scss'],
})
export class ManchasplateadoImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async manchasplateadoModal(){
    const modal = await this.modalCtrl.create({
      component: ManchasPlateadoModalPage
    })

    await modal.present();
  }

}
