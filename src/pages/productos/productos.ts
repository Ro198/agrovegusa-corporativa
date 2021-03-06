import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, ModalController, AlertController  } from 'ionic-angular';
import { ProductoService } from '../servicios/ProductosServices';

import { 
  ProductosdetallesPage,
  ProductosagregarPage,
  ProductosagotadosPage
} from "../index.paginas";

@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {


  productos = []
  productosLista = []
  datosUsuario
  perfil
  loading;
  BDCliente;
  ProductoService;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private viewCtrl: ViewController,
              ProductoService: ProductoService,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) 
  {

    this.ProductoService=ProductoService;
    this.listar_productos();
 

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  listar_productos()
  {
    
         this.loading =this.loadingCtrl.create({
           spinner: "bubbles",
           content: "Cargando todos los productos, espere...",
            });
             this.loading.present();

           this.ProductoService.listar_productos().subscribe(
          data => {


             console.log(data);
             this.productos=data
             this.productosLista= this.productos
              if(data.length!=0){
                this.loading.dismiss();
              console.log('Tienes productos agregados');

              window.localStorage.setItem("productos", JSON.stringify(data));
              // this.navCtrl.push(SlidePage);
             }

              if(data.length===0){
                this.loading.dismiss();
               console.log('No hay productos agregados');
               //this.navCtrl.push(BienvenidaPage);
             }

            }, 

          err => {
            this.loading.dismiss();
            console.log(err)

          //() =>  console.log('cargar equipos complete')
          });
  }

  detalles(event,item) 
  {                
      window.localStorage.setItem('datosProducto', JSON.stringify(item));
      this.navCtrl.push(ProductosdetallesPage);
 
  }


  enlace_agregar_producto(){

    this.navCtrl.push(ProductosagregarPage);
    
  }

  enlace_producto_agotado(){

    this.navCtrl.push(ProductosagotadosPage);

  }

// PARA ACTUALIZAR LOS DATOS

  Refrescar(refresher) 
  {
      console.log('Comienzo de la operaci??n asincr??nica', refresher);
      this.listar_productos()
      setTimeout(() => {
        console.log('La operaci??n asincr??nica ha finalizado');
        refresher.complete();
      }, 2000);
  }


  // BARRA DE BUSCADOR
 
  marca(ev: any) {

    this.productos = this.productosLista
    
    let val = ev.target.value;

    if (val && val.trim() != '') {
   this.productos =this.productos.filter((item) => {
        return (item.marca.toString().toLowerCase().indexOf(val.toLowerCase()) =="");
      })
    }
  }

  producto(ev: any) {

    this.productos = this.productosLista
    
    let val = ev.target.value;

    if (val && val.trim() != '') {
   this.productos =this.productos.filter((item) => {
        return (item.producto.toString().toLowerCase().indexOf(val.toLowerCase()) =="");
      })
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

}
