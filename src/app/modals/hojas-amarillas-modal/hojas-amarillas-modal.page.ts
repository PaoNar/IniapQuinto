import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojas-amarillas-modal',
  templateUrl: './hojas-amarillas-modal.page.html',
  styleUrls: ['./hojas-amarillas-modal.page.scss'],
})
export class HojasAmarillasModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
