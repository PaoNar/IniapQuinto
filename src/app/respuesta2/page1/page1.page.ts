import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasmoradasImagePage } from 'src/app/images/hojasmoradas-image/hojasmoradas-image.page';
import { ManchacafeplantaImagePage } from 'src/app/images/manchacafeplanta-image/manchacafeplanta-image.page';
import { ManchasplateadoplantaImagePage } from 'src/app/images/manchasplateadoplanta-image/manchasplateadoplanta-image.page';
import { PustulasplantaImagePage } from 'src/app/images/pustulasplanta-image/pustulasplanta-image.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(public nombre: VariablesService, 
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  // imagenes

  async manchacafeplantaImage(){
    const modal = await this.modalCtrl.create({
      component: ManchacafeplantaImagePage
    })
    await modal.present();
  }

  async hojasmoradasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmoradasImagePage
    })
    await modal.present();
  }

  async pustulasplantaImage(){
    const modal = await this.modalCtrl.create({
      component: PustulasplantaImagePage
    })
    await modal.present();
  }

  async manchasplateadoplantaImage(){
    const modal = await this.modalCtrl.create({
      component: ManchasplateadoplantaImagePage
    })
    await modal.present();
  }

}
