import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RajadurasImagePage } from 'src/app/images/rajaduras-image/rajaduras-image.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-rajaduras',
  templateUrl: './rajaduras.page.html',
  styleUrls: ['./rajaduras.page.scss'],
})
export class RajadurasPage implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {}
    
    
  
    // imagenes
  
    async rajadurasImage(){
      const modal = await this.modalCtrl.create({
        component: RajadurasImagePage
      })
  
      await modal.present();
    }

}
