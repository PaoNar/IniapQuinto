import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-enrrollamientoplanta-image',
  templateUrl: './enrrollamientoplanta-image.page.html',
  styleUrls: ['./enrrollamientoplanta-image.page.scss'],
})
export class EnrrollamientoplantaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
