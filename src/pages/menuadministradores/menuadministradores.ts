import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { 
  LoginPage,
  MenudistribuidorproductoPage,
  PromocionesadminPage,
  ProductosoflinePage
} from "../index.paginas";


@Component({
  selector: 'page-menuadministradores',
  templateUrl: 'menuadministradores.html',
})
export class MenuadministradoresPage {

  datosUsuario;
  perfil;
  loading;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) 
  {

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
    
  }

  promociones(){
    //this.navCtrl.push(AdministradorespromocionPage);
    this.navCtrl.push(PromocionesadminPage);
  }

  productos(){
    this.navCtrl.push(MenudistribuidorproductoPage);
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
    console.log('ionViewDidLoad MenuadministradoresPage');
  }

}
