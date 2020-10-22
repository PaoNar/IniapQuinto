import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-enrrolamiento-modal',
  templateUrl: './enrrolamiento-modal.page.html',
  styleUrls: ['./enrrolamiento-modal.page.scss'],
})
export class EnrrolamientoModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
