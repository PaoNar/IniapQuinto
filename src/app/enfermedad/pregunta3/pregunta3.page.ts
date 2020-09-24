import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.page.html',
  styleUrls: ['./pregunta3.page.scss'],
})
export class Pregunta3Page implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  salir(){
    this.modalCtrl.dismiss();
  }

}
