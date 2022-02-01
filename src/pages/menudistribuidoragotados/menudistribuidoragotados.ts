import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, ModalController, AlertController  } from 'ionic-angular';
import { ProductoService } from '../servicios/ProductosServices';

import { 
  MenudistribuidormostrarPage
} from "../index.paginas";

@Component({
  selector: 'page-menudistribuidoragotados',
  templateUrl: 'menudistribuidoragotados.html',
})
export class MenudistribuidoragotadosPage {

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
    this.lista_productos_agotados();
 

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);



  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  lista_productos_agotados()
  {
         this.loading =this.loadingCtrl.create({
          spinner: "bubbles",
           content: "Cargando productos agotados, espere...",
            });
             this.loading.present();

           this.ProductoService.lista_productos_agotados().subscribe(
          data => {
 

             console.log(data);
             this.productos=data
             this.productosLista= this.productos
              if(data.length!=0){
                this.loading.dismiss();
              console.log('Tienes productos agregados');

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
      this.navCtrl.push(MenudistribuidormostrarPage)
 
  }

  // PARA ACTUALIZAR LOS DATOS

  Refrescar(refresher) 
  {
      console.log('Comienzo de la operación asincrónica', refresher);
      this.lista_productos_agotados()
      setTimeout(() => {
        console.log('La operación asincrónica ha finalizado');
        refresher.complete();
      }, 2000);
  }


  // BARRA DE BUSCADOR
 
  getItems(ev: any) {

    this.productos = this.productosLista
    
    let val = ev.target.value;

    if (val && val.trim() != '') {
   this.productos =this.productos.filter((item) => {
        return (item.marca.toString().toLowerCase().indexOf(val.toLowerCase()) =="");
      })
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenudistribuidoragotadosPage');
  }

}
