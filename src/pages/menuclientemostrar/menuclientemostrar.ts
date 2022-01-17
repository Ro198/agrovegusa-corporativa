import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ProductoService } from '../servicios/ProductosServices';


@Component({
  selector: 'page-menuclientemostrar',
  templateUrl: 'menuclientemostrar.html',
})
export class MenuclientemostrarPage {

  BDProducto;
  datosP;
  datosUsuario;
  perfil;
  submitted = false;
  ProductoService;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              ProductoService: ProductoService,
              public alertCtrl: AlertController) 
  {


    this.ProductoService=ProductoService;

    this.BDProducto  = window.localStorage.getItem('datosProducto')
    this.datosP = JSON.parse(this.BDProducto)
    console.log(this.datosP);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuclientemostrarPage');
  }

}
