import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from '../../servicios/variables.service';
import { ModalPage } from '../modal/modal.page';
import { Pregunta2Page } from '../pregunta2/pregunta2.page';
import { Pregunta3Page } from '../pregunta3/pregunta3.page';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(public nombre: VariablesService, 
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }


  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ModalPage
    })

    await modal.present();
  }

  async preg2Modal(){
    const modal = await this.modalCtrl.create({
      component: Pregunta2Page
    })

    await modal.present();
  }


  async preg3Modal(){
    const modal = await this.modalCtrl.create({
      component: Pregunta3Page
    })

    await modal.present();
  }


  // ionViewDidEnter(){
  //   this.db.getSitios().then((res)=>{
  //  this.sitios = [];
  //  for(var i = 0; i < res.rows.length; i++){
  //      this.sitios.push({
  //        id: res.rows.item(i).id,
  //        lat: res.rows.item(i).lat,
  //        lng: res.rows.item(i).lng,
  //        address: res.rows.item(i).address,
  //        description: res.rows.item(i).description,
  //        foto: res.rows.item(i).foto
  //      });
  //  }

  //  },(err)=>{ /* alert('error al sacar de la bd'+err) */ })
  // }

  
}
