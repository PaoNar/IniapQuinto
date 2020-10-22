import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-trips-image',
  templateUrl: './trips-image.page.html',
  styleUrls: ['./trips-image.page.scss'],
})
export class TripsImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
