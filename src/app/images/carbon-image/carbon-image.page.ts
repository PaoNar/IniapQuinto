import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carbon-image',
  templateUrl: './carbon-image.page.html',
  styleUrls: ['./carbon-image.page.scss'],
})
export class CarbonImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
