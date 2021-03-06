import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-productosoflinemostrar',
  templateUrl: 'productosoflinemostrar.html',
})
export class ProductosoflinemostrarPage {

  BDProducto;
  datosP;
  datosUsuario;
  perfil;

  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {

    this.BDProducto  = window.localStorage.getItem('datosProducto')
    this.datosP = JSON.parse(this.BDProducto)
    console.log(this.datosP);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosoflinemostrarPage');
  }

}
 