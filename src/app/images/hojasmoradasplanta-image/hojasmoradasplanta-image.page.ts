import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasmoradasplanta-image',
  templateUrl: './hojasmoradasplanta-image.page.html',
  styleUrls: ['./hojasmoradasplanta-image.page.scss'],
})
export class HojasmoradasplantaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
