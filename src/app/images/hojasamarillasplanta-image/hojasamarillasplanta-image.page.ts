import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasamarillasplanta-image',
  templateUrl: './hojasamarillasplanta-image.page.html',
  styleUrls: ['./hojasamarillasplanta-image.page.scss'],
})
export class HojasamarillasplantaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
