import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pienegro-image',
  templateUrl: './pienegro-image.page.html',
  styleUrls: ['./pienegro-image.page.scss'],
})
export class PienegroImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
