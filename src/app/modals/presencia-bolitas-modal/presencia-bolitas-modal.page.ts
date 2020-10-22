import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-presencia-bolitas-modal',
  templateUrl: './presencia-bolitas-modal.page.html',
  styleUrls: ['./presencia-bolitas-modal.page.scss'],
})
export class PresenciaBolitasModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
