import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasmosaicoplanta-image',
  templateUrl: './hojasmosaicoplanta-image.page.html',
  styleUrls: ['./hojasmosaicoplanta-image.page.scss'],
})
export class HojasmosaicoplantaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
