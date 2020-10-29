import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-rajaduras-image',
  templateUrl: './rajaduras-image.page.html',
  styleUrls: ['./rajaduras-image.page.scss'],
})
export class RajadurasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  


}
