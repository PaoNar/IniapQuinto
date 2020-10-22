import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-gusano-blanco-modal',
  templateUrl: './gusano-blanco-modal.page.html',
  styleUrls: ['./gusano-blanco-modal.page.scss'],
})
export class GusanoBlancoModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
