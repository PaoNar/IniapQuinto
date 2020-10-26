import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HeladaImagePage } from 'src/app/images/helada-image/helada-image.page';
import { HeladaModalPage } from 'src/app/modals/helada-modal/helada-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-heladas',
  templateUrl: './heladas.page.html',
  styleUrls: ['./heladas.page.scss'],
})
export class HeladasPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }

  async heladasModal(){
    const modal = await this.modalCtrl.create({
      component: HeladaModalPage
    })

    await modal.present();
  }

  // imagenes

  async heladasImage(){
    const modal = await this.modalCtrl.create({
      component: HeladaImagePage
    })

    await modal.present();
  }

}
