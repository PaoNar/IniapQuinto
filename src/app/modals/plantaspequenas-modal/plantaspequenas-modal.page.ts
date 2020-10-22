import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-plantaspequenas-modal',
  templateUrl: './plantaspequenas-modal.page.html',
  styleUrls: ['./plantaspequenas-modal.page.scss'],
})
export class PlantaspequenasModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
