import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-presencia-tuberculos-modal',
  templateUrl: './presencia-tuberculos-modal.page.html',
  styleUrls: ['./presencia-tuberculos-modal.page.scss'],
})
export class PresenciaTuberculosModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
