import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManchaCafeModalPage } from 'src/app/modals/mancha-cafe-modal/mancha-cafe-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-manchacafe-image',
  templateUrl: './manchacafe-image.page.html',
  styleUrls: ['./manchacafe-image.page.scss'],
})
export class ManchacafeImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  async manchacafeModal(){
    const modal = await this.modalCtrl.create({
      component: ManchaCafeModalPage
    })

    await modal.present();
  }

}
