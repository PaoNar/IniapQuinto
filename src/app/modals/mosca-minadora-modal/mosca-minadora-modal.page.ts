import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-mosca-minadora-modal',
  templateUrl: './mosca-minadora-modal.page.html',
  styleUrls: ['./mosca-minadora-modal.page.scss'],
})
export class MoscaMinadoraModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
