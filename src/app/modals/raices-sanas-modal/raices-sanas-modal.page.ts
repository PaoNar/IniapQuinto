import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-raices-sanas-modal',
  templateUrl: './raices-sanas-modal.page.html',
  styleUrls: ['./raices-sanas-modal.page.scss'],
})
export class RaicesSanasModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
