import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-polilla-image',
  templateUrl: './polilla-image.page.html',
  styleUrls: ['./polilla-image.page.scss'],
})
export class PolillaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
