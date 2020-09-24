import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.page.html',
  styleUrls: ['./pregunta2.page.scss'],
})
export class Pregunta2Page implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  salir(){
    this.modalCtrl.dismiss();
  }

}
