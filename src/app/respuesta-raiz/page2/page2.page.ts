import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NematodosImagePage } from 'src/app/images/nematodos-image/nematodos-image.page';
import { NematodosModalPage } from 'src/app/Modals/nematodos-modal/nematodos-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }

    async nematodosImage(){
      const modal = await this.modalCtrl.create({
        component: NematodosImagePage
      })
  
      await modal.present();
    }
    
  async nematodosModal(){
    const modal = await this.modalCtrl.create({
      component: NematodosModalPage
    })

    await modal.present();
  }


}
