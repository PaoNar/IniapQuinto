import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CostranegraImagePage } from 'src/app/images/costranegra-image/costranegra-image.page';
import { GusanoblancoImagePage } from 'src/app/images/gusanoblanco-image/gusanoblanco-image.page';
import { HeladaImagePage } from 'src/app/images/helada-image/helada-image.page';
import { LanchaImagePage } from 'src/app/images/lancha-image/lancha-image.page';
import { MoscaminadoraImagePage } from 'src/app/images/moscaminadora-image/moscaminadora-image.page';
import { NematodosImagePage } from 'src/app/images/nematodos-image/nematodos-image.page';
import { PienegroImagePage } from 'src/app/images/pienegro-image/pienegro-image.page';
import { PolillaImagePage } from 'src/app/images/polilla-image/polilla-image.page';
import { PuntamoradaImagePage } from 'src/app/images/puntamorada-image/puntamorada-image.page';
import { RoyaImagePage } from 'src/app/images/roya-image/roya-image.page';
import { TripsImagePage } from 'src/app/images/trips-image/trips-image.page';
import { VirosisImagePage } from 'src/app/images/virosis-image/virosis-image.page';
import { CostraNegraModalPage } from 'src/app/modals/costra-negra-modal/costra-negra-modal.page';
import { GusanoBlancoModalPage } from 'src/app/Modals/gusano-blanco-modal/gusano-blanco-modal.page';
import { HeladaModalPage } from 'src/app/modals/helada-modal/helada-modal.page';
import { LanchaModalPage } from 'src/app/modals/lancha-modal/lancha-modal.page';
import { MoscaMinadoraModalPage } from 'src/app/modals/mosca-minadora-modal/mosca-minadora-modal.page';
import { NematodosModalPage } from 'src/app/Modals/nematodos-modal/nematodos-modal.page';
import { PienegroModalPage } from 'src/app/modals/pienegro-modal/pienegro-modal.page';
import { PolillaModalPage } from 'src/app/modals/polilla-modal/polilla-modal.page';
import { PuntaMoradaModalPage } from 'src/app/modals/punta-morada-modal/punta-morada-modal.page';
import { RoyaModalPage } from 'src/app/modals/roya-modal/roya-modal.page';
import { TripsModalPage } from 'src/app/modals/trips-modal/trips-modal.page';
import { VirosisModalPage } from 'src/app/modals/virosis-modal/virosis-modal.page';
import { VariablesService } from '../../servicios/variables.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }
    
  async royaModal(){
    const modal = await this.modalCtrl.create({
      component: RoyaModalPage
    })

    await modal.present();
  }

  async lanchaModal(){
    const modal = await this.modalCtrl.create({
      component: LanchaModalPage
    })

    await modal.present();
  }


  async tripsModal(){
    const modal = await this.modalCtrl.create({
      component: TripsModalPage
    })

    await modal.present();
  }

  async gusanoblancoModal(){
    const modal = await this.modalCtrl.create({
      component: GusanoBlancoModalPage
    })

    await modal.present();
  }

  async moscaminadoraModal(){
    const modal = await this.modalCtrl.create({
      component: MoscaMinadoraModalPage
    })

    await modal.present();
  }


  async polillaModal(){
    const modal = await this.modalCtrl.create({
      component: PolillaModalPage
    })

    await modal.present();
  }

  async virosisModal(){
    const modal = await this.modalCtrl.create({
      component: VirosisModalPage
    })

    await modal.present();
  }

  async pienegroModal(){
    const modal = await this.modalCtrl.create({
      component: PienegroModalPage
    })

    await modal.present();
  }


  async heladaModal(){
    const modal = await this.modalCtrl.create({
      component: HeladaModalPage
    })

    await modal.present();
  }

  async costranegraModal(){
    const modal = await this.modalCtrl.create({
      component: CostraNegraModalPage
    })

    await modal.present();
  }

  async nematodosModal(){
    const modal = await this.modalCtrl.create({
      component: NematodosModalPage
    })

    await modal.present();
  }


  async puntamoradaModal(){
    const modal = await this.modalCtrl.create({
      component: PuntaMoradaModalPage
    })

    await modal.present();
  }

  // imagenes

  async royaImage(){
    const modal = await this.modalCtrl.create({
      component: RoyaImagePage
    })

    await modal.present();
  }

  async lanchaImage(){
    const modal = await this.modalCtrl.create({
      component: LanchaImagePage
    })

    await modal.present();
  }


  async tripsImage(){
    const modal = await this.modalCtrl.create({
      component: TripsImagePage
    })

    await modal.present();
  }

  async gusanoblancoImage(){
    const modal = await this.modalCtrl.create({
      component: GusanoblancoImagePage
    })

    await modal.present();
  }

  async moscaminadoraImage(){
    const modal = await this.modalCtrl.create({
      component: MoscaminadoraImagePage
    })

    await modal.present();
  }


  async polillaImage(){
    const modal = await this.modalCtrl.create({
      component: PolillaImagePage
    })

    await modal.present();
  }

  async virosisImage(){
    const modal = await this.modalCtrl.create({
      component: VirosisImagePage
    })

    await modal.present();
  }

  async pienegroImage(){
    const modal = await this.modalCtrl.create({
      component: PienegroImagePage
    })

    await modal.present();
  }


  async heladaImage(){
    const modal = await this.modalCtrl.create({
      component: HeladaImagePage
    })

    await modal.present();
  }

  async costranegraImage(){
    const modal = await this.modalCtrl.create({
      component: CostranegraImagePage
    })

    await modal.present();
  }

  async nematodosImage(){
    const modal = await this.modalCtrl.create({
      component: NematodosImagePage
    })

    await modal.present();
  }


  async puntamoradaImage(){
    const modal = await this.modalCtrl.create({
      component: PuntamoradaImagePage
    })

    await modal.present();
  }
  

}
