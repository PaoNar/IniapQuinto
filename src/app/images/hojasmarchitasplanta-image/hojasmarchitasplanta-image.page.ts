import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-hojasmarchitasplanta-image',
  templateUrl: './hojasmarchitasplanta-image.page.html',
  styleUrls: ['./hojasmarchitasplanta-image.page.scss'],
})
export class HojasmarchitasplantaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
