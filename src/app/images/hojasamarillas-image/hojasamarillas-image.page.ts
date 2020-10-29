import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasamarillas-image',
  templateUrl: './hojasamarillas-image.page.html',
  styleUrls: ['./hojasamarillas-image.page.scss'],
})
export class HojasamarillasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }


}
