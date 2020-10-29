import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasmanchasplanta-image',
  templateUrl: './hojasmanchasplanta-image.page.html',
  styleUrls: ['./hojasmanchasplanta-image.page.scss'],
})
export class HojasmanchasplantaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
