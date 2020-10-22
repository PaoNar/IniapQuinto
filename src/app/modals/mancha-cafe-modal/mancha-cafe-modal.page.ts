import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-mancha-cafe-modal',
  templateUrl: './mancha-cafe-modal.page.html',
  styleUrls: ['./mancha-cafe-modal.page.scss'],
})
export class ManchaCafeModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}