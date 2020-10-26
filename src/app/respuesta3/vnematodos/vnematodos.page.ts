import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VirosisModalPage } from 'src/app/modals/virosis-modal/virosis-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-vnematodos',
  templateUrl: './vnematodos.page.html',
  styleUrls: ['./vnematodos.page.scss'],
})
export class VnematodosPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    }

    ngOnInit(): void {
    }
    
  async virosisModal(){
    const modal = await this.modalCtrl.create({
      component: VirosisModalPage
    })

    await modal.present();
  }

}
