import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-costra-negra-modal',
  templateUrl: './costra-negra-modal.page.html',
  styleUrls: ['./costra-negra-modal.page.scss'],
})
export class CostraNegraModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
