import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nematodos-image',
  templateUrl: './nematodos-image.page.html',
  styleUrls: ['./nematodos-image.page.scss'],
})
export class NematodosImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
