import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-presencia-agallas-modal',
  templateUrl: './presencia-agallas-modal.page.html',
  styleUrls: ['./presencia-agallas-modal.page.scss'],
})
export class PresenciaAgallasModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
