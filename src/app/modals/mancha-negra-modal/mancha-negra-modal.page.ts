import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-mancha-negra-modal',
  templateUrl: './mancha-negra-modal.page.html',
  styleUrls: ['./mancha-negra-modal.page.scss'],
})
export class ManchaNegraModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
