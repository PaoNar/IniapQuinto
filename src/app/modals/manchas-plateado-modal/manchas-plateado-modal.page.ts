import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-manchas-plateado-modal',
  templateUrl: './manchas-plateado-modal.page.html',
  styleUrls: ['./manchas-plateado-modal.page.scss'],
})
export class ManchasPlateadoModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
