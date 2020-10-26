import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PresenciaBolitasModalPage } from 'src/app/modals/presencia-bolitas-modal/presencia-bolitas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-presenciabolitas-image',
  templateUrl: './presenciabolitas-image.page.html',
  styleUrls: ['./presenciabolitas-image.page.scss'],
})
export class PresenciabolitasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  async presenciabolitasModal(){
    const modal = await this.modalCtrl.create({
      component: PresenciaBolitasModalPage
    })
    await modal.present();
  }

}
