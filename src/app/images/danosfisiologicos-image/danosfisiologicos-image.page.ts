import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-danosfisiologicos-image',
  templateUrl: './danosfisiologicos-image.page.html',
  styleUrls: ['./danosfisiologicos-image.page.scss'],
})
export class DanosfisiologicosImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
