import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-enrrollamiento-image',
  templateUrl: './enrrollamiento-image.page.html',
  styleUrls: ['./enrrollamiento-image.page.scss'],
})
export class EnrrollamientoImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  

}
