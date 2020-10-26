import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PudricionModalPage } from 'src/app/modals/pudricion-modal/pudricion-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-pudricion-image',
  templateUrl: './pudricion-image.page.html',
  styleUrls: ['./pudricion-image.page.scss'],
})
export class PudricionImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async pudricionModal(){
    const modal = await this.modalCtrl.create({
      component: PudricionModalPage
    })
    await modal.present();
  }

}
