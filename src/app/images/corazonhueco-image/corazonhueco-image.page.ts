import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CorazonhuecoModalPage } from 'src/app/modals/corazonhueco-modal/corazonhueco-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-corazonhueco-image',
  templateUrl: './corazonhueco-image.page.html',
  styleUrls: ['./corazonhueco-image.page.scss'],
})
export class CorazonhuecoImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  // async corazonhuecoModal(){
  //   const modal = await this.modalCtrl.create({
  //     component: CorazonhuecoModalPage
  //   })

  //   await modal.present();
  // }

}
