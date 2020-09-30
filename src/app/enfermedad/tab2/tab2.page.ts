import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VariablesService } from '../../servicios/variables.service';
import { ModalPage } from '../modal/modal.page';
import { Pregunta2Page } from '../pregunta2/pregunta2.page';
import { Pregunta3Page } from '../pregunta3/pregunta3.page';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
      // this.iniciarApp();
    }

    // iniciarApp(){
    //   this.platform.ready()
    //   .then(() =>{
    //     this.statusBar.styleDefault();
    //     this.splashScreen.hide();
    //   })
    // }

    ngOnInit(): void {
      
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
  

}
