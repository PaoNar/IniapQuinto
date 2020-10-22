import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-costranegra-image',
  templateUrl: './costranegra-image.page.html',
  styleUrls: ['./costranegra-image.page.scss'],
})
export class CostranegraImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
