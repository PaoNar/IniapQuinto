import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-sarnapolvorienta-modal',
  templateUrl: './sarnapolvorienta-modal.page.html',
  styleUrls: ['./sarnapolvorienta-modal.page.scss'],
})
export class SarnapolvorientaModalPage implements OnInit {
  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
