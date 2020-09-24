import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  coords : any = { lat: 0, lng: 0 }
  address: string;
  description: string = '';
  foto: any = '';


  // @Input() nombre;
  // @Input() pais;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  salir(){
    this.modalCtrl.dismiss();
  }



  

}
