import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CorazonhuecoImagePage } from 'src/app/images/corazonhueco-image/corazonhueco-image.page';
import { CorazonhuecoModalPage } from 'src/app/modals/corazonhueco-modal/corazonhueco-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-corazon-hueco',
  templateUrl: './corazon-hueco.page.html',
  styleUrls: ['./corazon-hueco.page.scss'],
})
export class CorazonHuecoPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {}
    
    async corazonhuecoModal(){
      const modal = await this.modalCtrl.create({
        component: CorazonhuecoModalPage
      })
  
      await modal.present();
    }
  
    // imagenes
  
    async corazonhuecoImage(){
      const modal = await this.modalCtrl.create({
        component: CorazonhuecoImagePage
      })
  
      await modal.present();
    }

}
