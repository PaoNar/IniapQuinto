import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-manchasnegrasplanta-image',
  templateUrl: './manchasnegrasplanta-image.page.html',
  styleUrls: ['./manchasnegrasplanta-image.page.scss'],
})
export class ManchasnegrasplantaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
