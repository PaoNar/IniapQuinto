import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-punta-morada-modal',
  templateUrl: './punta-morada-modal.page.html',
  styleUrls: ['./punta-morada-modal.page.scss'],
})
export class PuntaMoradaModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
