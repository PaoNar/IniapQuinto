import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pregunta2Page } from 'src/app/enfermedad/pregunta2/pregunta2.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(public nombre: VariablesService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  
  async preg2Modal(){
    const modal = await this.modalCtrl.create({
      component: Pregunta2Page
    })

    await modal.present();
  }
}
