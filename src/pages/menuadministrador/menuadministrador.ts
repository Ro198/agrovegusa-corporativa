import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { 
  LoginPage,
  ProductosPage,
  UsuarioslistaPage,
  PromocionesadminPage,
  ProductosoflinePage
} from "../index.paginas";

@Component({
  selector: 'page-menuadministrador',
  templateUrl: 'menuadministrador.html',
})
export class MenuadministradorPage {

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

  productos(){
   this.navCtrl.push(ProductosPage);
  }

  promociones(){
    this.navCtrl.push(PromocionesadminPage);
  }

  usuarios(){
    this.navCtrl.push(UsuarioslistaPage);
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
    console.log('ionViewDidLoad MenuadministradorPage');
  }

}
