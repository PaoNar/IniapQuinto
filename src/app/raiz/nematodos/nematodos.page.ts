import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NematodosImagePage } from 'src/app/images/nematodos-image/nematodos-image.page';
import { NematodosModalPage } from 'src/app/Modals/nematodos-modal/nematodos-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-nematodos',
  templateUrl: './nematodos.page.html',
  styleUrls: ['./nematodos.page.scss'],
})
export class NematodosPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }

    async nematodosModal(){
      const modal = await this.modalCtrl.create({
        component: NematodosModalPage
      })
  
      await modal.present();
    }
    
  async nematodosImage(){
    const modal = await this.modalCtrl.create({
      component: NematodosImagePage
    })

    await modal.present();
  }


}
