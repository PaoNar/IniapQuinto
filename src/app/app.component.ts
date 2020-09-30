import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { VariablesService} from './servicios/variables.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
     platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public nombre: VariablesService,
    

  ) {}

  // platform.ready().then(() => {
  //   StatusBar.styleDefault();
  //   SplashScreen.hide();
  // });

  
 
}
