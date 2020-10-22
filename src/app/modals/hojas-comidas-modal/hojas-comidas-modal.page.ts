import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojas-comidas-modal',
  templateUrl: './hojas-comidas-modal.page.html',
  styleUrls: ['./hojas-comidas-modal.page.scss'],
})
export class HojasComidasModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
