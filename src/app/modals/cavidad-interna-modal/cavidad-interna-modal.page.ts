import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-cavidad-interna-modal',
  templateUrl: './cavidad-interna-modal.page.html',
  styleUrls: ['./cavidad-interna-modal.page.scss'],
})
export class CavidadInternaModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
