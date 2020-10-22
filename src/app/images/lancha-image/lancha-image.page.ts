import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lancha-image',
  templateUrl: './lancha-image.page.html',
  styleUrls: ['./lancha-image.page.scss'],
})
export class LanchaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
