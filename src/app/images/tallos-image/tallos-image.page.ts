import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TalloPage } from 'src/app/Modals/tallo/tallo.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-tallos-image',
  templateUrl: './tallos-image.page.html',
  styleUrls: ['./tallos-image.page.scss'],
})
export class TallosImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async talloModal(){
    const modal = await this.modalCtrl.create({
      component: TalloPage
    })
    await modal.present();
  }

}
