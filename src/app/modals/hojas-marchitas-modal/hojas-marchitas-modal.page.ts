import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojas-marchitas-modal',
  templateUrl: './hojas-marchitas-modal.page.html',
  styleUrls: ['./hojas-marchitas-modal.page.scss'],
})
export class HojasMarchitasModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
