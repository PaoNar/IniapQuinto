import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-corazonhueco-image',
  templateUrl: './corazonhueco-image.page.html',
  styleUrls: ['./corazonhueco-image.page.scss'],
})
export class CorazonhuecoImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
