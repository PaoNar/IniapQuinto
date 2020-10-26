import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InsectosModalPage } from 'src/app/modals/insectos-modal/insectos-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-insectos-image',
  templateUrl: './insectos-image.page.html',
  styleUrls: ['./insectos-image.page.scss'],
})
export class InsectosImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async insectosModal(){
    const modal = await this.modalCtrl.create({
      component: InsectosModalPage
    })
    await modal.present();
  }

}
