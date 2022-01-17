import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { 
  LoginPage,
  MenuclienteproductoPage,
  PromocionesPage,
  ProductosoflinePage
} from "../index.paginas";

@Component({
  selector: 'page-menucliente',
  templateUrl: 'menucliente.html',
})
export class MenuclientePage {

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

  promociones(){
    this.navCtrl.push(PromocionesPage);
  }

  productos(){
    this.navCtrl.push(MenuclienteproductoPage);
   }

   productosofline(){

    let alert = this.alertCtrl.create({
      title: "¡ATENCION!",
      message: "Para ver la lista de productos ofline, primero carga la lista de productos con Wifi",
      buttons: [
        {
          text: "VOLVER",
          role: "cancel",
          handler: () => {}
        },
        {
          text: "YA LO HICE",
          handler: () => {
            this.navCtrl.push(ProductosoflinePage);
          }
        }
       
      ]
    });
    alert.present();

   }

  //CERRAR SESION

  logout(): void {
    let confirm = this.alertCtrl.create({
      title: "¡ATENCION!",
      message: "¿Estas seguro que quieres cerrar sesión?",
      buttons: [
        {
          text: "NO",
          handler: () => {}
        },
        {
          text: "SI",
          handler: () => {
            window.localStorage.removeItem("dataUser");
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuclientePage');
  }

}
