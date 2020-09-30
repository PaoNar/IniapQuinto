import { Component} from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  
  constructor(
    private splashScreen: SplashScreen,
    private platform: Platform,
    private statusBar: StatusBar,) {
    
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
  
}


