import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-manchasnegras-image',
  templateUrl: './manchasnegras-image.page.html',
  styleUrls: ['./manchasnegras-image.page.scss'],
})
export class ManchasnegrasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
