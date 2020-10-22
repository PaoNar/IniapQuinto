import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojas-minadas-modal',
  templateUrl: './hojas-minadas-modal.page.html',
  styleUrls: ['./hojas-minadas-modal.page.scss'],
})
export class HojasMinadasModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
