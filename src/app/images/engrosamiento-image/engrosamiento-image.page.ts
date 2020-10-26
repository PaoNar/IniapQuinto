import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EngrosamientoModalPage } from 'src/app/modals/engrosamiento-modal/engrosamiento-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-engrosamiento-image',
  templateUrl: './engrosamiento-image.page.html',
  styleUrls: ['./engrosamiento-image.page.scss'],
})
export class EngrosamientoImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async engrosamientoModal(){
    const modal = await this.modalCtrl.create({
      component: EngrosamientoModalPage
    })
    await modal.present();
  }

}
