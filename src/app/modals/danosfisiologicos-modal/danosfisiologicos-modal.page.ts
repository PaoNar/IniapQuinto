import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-danosfisiologicos-modal',
  templateUrl: './danosfisiologicos-modal.page.html',
  styleUrls: ['./danosfisiologicos-modal.page.scss'],
})
export class DanosfisiologicosModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
