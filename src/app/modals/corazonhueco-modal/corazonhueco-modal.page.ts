import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-corazonhueco-modal',
  templateUrl: './corazonhueco-modal.page.html',
  styleUrls: ['./corazonhueco-modal.page.scss'],
})
export class CorazonhuecoModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
