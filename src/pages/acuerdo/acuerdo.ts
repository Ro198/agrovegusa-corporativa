import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { 
  MenuadministradorPage,
  MenuclientePage,
  MenudistribuidorPage,
  MenuadministradoresPage
} from "../index.paginas";

@Component({
  selector: 'page-acuerdo',
  templateUrl: 'acuerdo.html',
})
export class AcuerdoPage {

  datosUsuario;
  perfil;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) 
  {

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }

  menus(){

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )

    if(this.perfil.tipoCuenta == 1){

        let alert = this.alertCtrl.create({
          title: '¡Bienvenido!',
          subTitle: this.perfil.nombreUsuario,
          buttons: ['CONTINUAR']
          });
          alert.present();
                                
          console.log(this.perfil);
          window.localStorage.setItem('datosCliente', JSON.stringify(this.perfil));
          this.navCtrl.push(MenuadministradorPage);
    }
    else if(this.perfil.tipoCuenta == 2){

        let alert = this.alertCtrl.create({
          title: '¡Bienvenido!',
          subTitle: this.perfil.nombreUsuario,
          buttons: ['CONTINUAR']
          });
          alert.present();
                                            
          console.log(this.perfil);
          window.localStorage.setItem('datosCliente', JSON.stringify(this.perfil));
          this.navCtrl.push(MenudistribuidorPage);
    }
    else if(this.perfil.tipoCuenta == 3){

      let alert = this.alertCtrl.create({
        title: '¡Bienvenido!',
        subTitle: this.perfil.nombreUsuario,
        buttons: ['CONTINUAR']
        });
        alert.present();
                                          
        console.log(this.perfil);
        window.localStorage.setItem('datosCliente', JSON.stringify(this.perfil));
        this.navCtrl.push(MenuclientePage);
  }
  else if(this.perfil.tipoCuenta == 4){

    let alert = this.alertCtrl.create({
      title: '¡Bienvenido!',
      subTitle: this.perfil.nombreUsuario,
      buttons: ['CONTINUAR']
      });
      alert.present();
                                        
      console.log(this.perfil);
      window.localStorage.setItem('datosCliente', JSON.stringify(this.perfil));
      this.navCtrl.push(MenuadministradoresPage);
}
    else{
          let alert = this.alertCtrl.create({
          title: '¡ERROR!',
          subTitle: 'Algo salio mal...',
          buttons: ['OK']
            });
          alert.present();
          }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcuerdoPage');
  }

}
