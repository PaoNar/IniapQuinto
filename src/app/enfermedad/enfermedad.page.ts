import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../servicios/variables.service';


@Component({
  selector: 'app-enfermedad',
  templateUrl: './enfermedad.page.html',
  styleUrls: ['./enfermedad.page.scss'],
})
export class EnfermedadPage implements OnInit {

  constructor(public nombre: VariablesService, ) {
    
      // this.iniciarApp();
    }
    ngOnInit(){

    }

    // iniciarApp(){
    //   this.platform.ready()
    //   .then(() =>{
    //     this.statusBar.styleDefault();
    //     this.splashScreen.hide();
    //   })
    // }

}

