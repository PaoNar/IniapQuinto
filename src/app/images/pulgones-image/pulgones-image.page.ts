import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pulgones-image',
  templateUrl: './pulgones-image.page.html',
  styleUrls: ['./pulgones-image.page.scss'],
})
export class PulgonesImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
