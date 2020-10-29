import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-puntamorada-modal',
  templateUrl: './puntamorada-modal.page.html',
  styleUrls: ['./puntamorada-modal.page.scss'],
})
export class PuntamoradaModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
