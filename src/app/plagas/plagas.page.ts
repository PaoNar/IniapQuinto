import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CostranegraImagePage } from '../images/costranegra-image/costranegra-image.page';
import { GusanoblancoImagePage } from '../images/gusanoblanco-image/gusanoblanco-image.page';
import { HeladaImagePage } from '../images/helada-image/helada-image.page';
import { LanchaImagePage } from '../images/lancha-image/lancha-image.page';
import { MoscaminadoraImagePage } from '../images/moscaminadora-image/moscaminadora-image.page';
import { NematodosImagePage } from '../images/nematodos-image/nematodos-image.page';
import { PienegroImagePage } from '../images/pienegro-image/pienegro-image.page';
import { PolillaImagePage } from '../images/polilla-image/polilla-image.page';
import { PuntamoradaImagePage } from '../images/puntamorada-image/puntamorada-image.page';
import { RoyaImagePage } from '../images/roya-image/roya-image.page';
import { TripsImagePage } from '../images/trips-image/trips-image.page';
import { VirosisImagePage } from '../images/virosis-image/virosis-image.page';
import { CostranegraModalPage } from '../modals/costranegra-modal/costranegra-modal.page';
import { GusanoblancoModalPage } from '../modals/gusanoblanco-modal/gusanoblanco-modal.page';
import { HeladaModalPage } from '../modals/helada-modal/helada-modal.page';
import { LanchaModalPage } from '../modals/lancha-modal/lancha-modal.page';
import { MoscaminadoraModalPage } from '../modals/moscaminadora-modal/moscaminadora-modal.page';
import { NematodosModalPage } from '../Modals/nematodos-modal/nematodos-modal.page';
import { PienegroModalPage } from '../modals/pienegro-modal/pienegro-modal.page';
import { PolillaModalPage } from '../modals/polilla-modal/polilla-modal.page';
import { PuntamoradaModalPage } from '../modals/puntamorada-modal/puntamorada-modal.page';
import { RoyaModalPage } from '../modals/roya-modal/roya-modal.page';
import { TripsModalPage } from '../modals/trips-modal/trips-modal.page';
import { VirosisModalPage } from '../modals/virosis-modal/virosis-modal.page';
import { VariablesService } from '../servicios/variables.service';

@Component({
  selector: 'app-plagas',
  templateUrl: './plagas.page.html',
  styleUrls: ['./plagas.page.scss'],
})
export class PlagasPage implements OnInit {

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
      component: GusanoblancoModalPage
    })

    await modal.present();
  }

  async moscaminadoraModal(){
    const modal = await this.modalCtrl.create({
      component: MoscaminadoraModalPage
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
      component: CostranegraModalPage
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
      component: PuntamoradaModalPage
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
