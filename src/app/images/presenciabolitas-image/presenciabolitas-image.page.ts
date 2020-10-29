import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-presenciabolitas-image',
  templateUrl: './presenciabolitas-image.page.html',
  styleUrls: ['./presenciabolitas-image.page.scss'],
})
export class PresenciabolitasImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
