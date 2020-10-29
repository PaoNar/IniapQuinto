import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojascomidas-image',
  templateUrl: './hojascomidas-image.page.html',
  styleUrls: ['./hojascomidas-image.page.scss'],
})
export class HojascomidasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
 
}
