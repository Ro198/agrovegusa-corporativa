import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
  PedidospromotorPage
} from "../index.paginas";

@Component({
  selector: 'page-menudistribuidormostrar',
  templateUrl: 'menudistribuidormostrar.html',
})
export class MenudistribuidormostrarPage {

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

  pedido(){
    this.navCtrl.push(PedidospromotorPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenudistribuidormostrarPage');
  }

}
