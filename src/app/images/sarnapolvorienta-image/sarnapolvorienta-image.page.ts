import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sarnapolvorienta-image',
  templateUrl: './sarnapolvorienta-image.page.html',
  styleUrls: ['./sarnapolvorienta-image.page.scss'],
})
export class SarnapolvorientaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
