import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-manchacafeplanta-image',
  templateUrl: './manchacafeplanta-image.page.html',
  styleUrls: ['./manchacafeplanta-image.page.scss'],
})
export class ManchacafeplantaImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
