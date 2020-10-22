import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojas-mordidas-modal',
  templateUrl: './hojas-mordidas-modal.page.html',
  styleUrls: ['./hojas-mordidas-modal.page.scss'],
})
export class HojasMordidasModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
