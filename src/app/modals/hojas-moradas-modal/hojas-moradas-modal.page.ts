import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojas-moradas-modal',
  templateUrl: './hojas-moradas-modal.page.html',
  styleUrls: ['./hojas-moradas-modal.page.scss'],
})
export class HojasMoradasModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
