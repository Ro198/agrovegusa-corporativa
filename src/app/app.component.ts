import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';


import {
  LoginPage,
  MenuadministradorPage,
  MenudistribuidorPage,
  MenuclientePage,
  MenuadministradoresPage
} from "../pages/index.paginas";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  userData;
  datosUser;
  //rootPage;

  rootPage:any = LoginPage;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private push: Push) 
{

    this.initializeApp();
    this.datosUser = localStorage.getItem("dataUser");
    this.userData = JSON.parse(this.datosUser);

    platform.registerBackButtonAction(() => {
      let alert = alertCtrl.create({
        title: "Salir",
        message: "¿Deseas salir de la aplicación?",
        buttons: [
          {
            text: "Cancelar",
            role: "cancel",
            handler: () => {}
          },
          {
            text: "Salir",
            handler: () => {
              navigator["app"].exitApp();
            }
          }
         
        ]
      });
      alert.present();
      // navigator['app'].exitApp();
    });

    
      //CERRAR SESION Y NO CERRAR SESION MIENTRAS SE INICIA

      if (this.userData == null) {
        this.rootPage = LoginPage;
      } 
      else if (this.userData.tipoCuenta == 1){
        this.rootPage = MenuadministradorPage;
      }
      else if (this.userData.tipoCuenta == 2){
        this.rootPage = MenudistribuidorPage;
      }
      else if (this.userData.tipoCuenta == 3){
        this.rootPage = MenuclientePage;
      }
      else if (this.userData.tipoCuenta == 4){
        this.rootPage = MenuadministradoresPage;
      }

  }

  initializeApp() { 
    this.platform.ready().then(() => {
  
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.pushSetup();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  pushSetup(){
    const options: PushOptions = {
      android: {
        senderID: '953521865926'
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      }
   };
   
   const pushObject: PushObject = this.push.init(options);
   
   
   pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
   
   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
   
   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }


}

