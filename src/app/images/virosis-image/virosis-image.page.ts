import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-virosis-image',
  templateUrl: './virosis-image.page.html',
  styleUrls: ['./virosis-image.page.scss'],
})
export class VirosisImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
