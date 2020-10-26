import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-deficienciasnutricionales-modal',
  templateUrl: './deficienciasnutricionales-modal.page.html',
  styleUrls: ['./deficienciasnutricionales-modal.page.scss'],
})
export class DeficienciasnutricionalesModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
