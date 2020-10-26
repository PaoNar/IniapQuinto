import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TuberculoPage } from 'src/app/modals/tuberculo/tuberculo.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-tuberculo-image',
  templateUrl: './tuberculo-image.page.html',
  styleUrls: ['./tuberculo-image.page.scss'],
})
export class TuberculoImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async tuberculoModal(){
    const modal = await this.modalCtrl.create({
      component: TuberculoPage
    })
    await modal.present();
  }

}
