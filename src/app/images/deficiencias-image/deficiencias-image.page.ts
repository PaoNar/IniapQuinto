import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-deficiencias-image',
  templateUrl: './deficiencias-image.page.html',
  styleUrls: ['./deficiencias-image.page.scss'],
})
export class DeficienciasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
