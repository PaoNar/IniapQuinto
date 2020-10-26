import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PsilidosModalPage } from 'src/app/modals/psilidos-modal/psilidos-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-psilidos-image',
  templateUrl: './psilidos-image.page.html',
  styleUrls: ['./psilidos-image.page.scss'],
})
export class PsilidosImagePage implements OnInit {

  constructor(private modalCtrl: ModalController, public nombre: VariablesService) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
  async psilidosModal(){
    const modal = await this.modalCtrl.create({
      component: PsilidosModalPage
    })
    await modal.present();
  }

}
