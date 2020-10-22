import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pulguilla-image',
  templateUrl: './pulguilla-image.page.html',
  styleUrls: ['./pulguilla-image.page.scss'],
})
export class PulguillaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
