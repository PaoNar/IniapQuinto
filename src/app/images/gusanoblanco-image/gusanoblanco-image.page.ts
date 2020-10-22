import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gusanoblanco-image',
  templateUrl: './gusanoblanco-image.page.html',
  styleUrls: ['./gusanoblanco-image.page.scss'],
})
export class GusanoblancoImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
