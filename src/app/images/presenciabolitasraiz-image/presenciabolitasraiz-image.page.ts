import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-presenciabolitasraiz-image',
  templateUrl: './presenciabolitasraiz-image.page.html',
  styleUrls: ['./presenciabolitasraiz-image.page.scss'],
})
export class PresenciabolitasraizImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
