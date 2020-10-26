import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanchaImagePage } from 'src/app/images/lancha-image/lancha-image.page';
import { LanchaModalPage } from 'src/app/modals/lancha-modal/lancha-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-lancha',
  templateUrl: './lancha.page.html',
  styleUrls: ['./lancha.page.scss'],
})
export class LanchaPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }

  async lanchaModal(){
    const modal = await this.modalCtrl.create({
      component: LanchaModalPage
    })

    await modal.present();
  }

  // imagenes

  async lanchaImage(){
    const modal = await this.modalCtrl.create({
      component:LanchaImagePage
    })

    await modal.present();
  }

}
