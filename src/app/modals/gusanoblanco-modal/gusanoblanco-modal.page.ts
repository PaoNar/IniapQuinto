import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-gusanoblanco-modal',
  templateUrl: './gusanoblanco-modal.page.html',
  styleUrls: ['./gusanoblanco-modal.page.scss'],
})
export class GusanoblancoModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
