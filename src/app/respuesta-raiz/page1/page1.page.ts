import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PresenciaBolitasModalPage } from 'src/app/modals/presencia-bolitas-modal/presencia-bolitas-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(public nombre: VariablesService, 
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }


  async presenciabolitasModal(){
    const modal = await this.modalCtrl.create({
      component: PresenciaBolitasModalPage
    })

    await modal.present();
  }

}
