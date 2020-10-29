import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-presenciatuberculos-image',
  templateUrl: './presenciatuberculos-image.page.html',
  styleUrls: ['./presenciatuberculos-image.page.scss'],
})
export class PresenciatuberculosImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
}
