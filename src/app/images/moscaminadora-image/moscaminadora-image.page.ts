import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-moscaminadora-image',
  templateUrl: './moscaminadora-image.page.html',
  styleUrls: ['./moscaminadora-image.page.scss'],
})
export class MoscaminadoraImagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
