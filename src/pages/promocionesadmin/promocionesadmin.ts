import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProductoService } from '../servicios/ProductosServices';

import { 
  PromocionesagregaradminPage,
  PromocionesadmineditarPage
} from "../index.paginas";

@Component({
  selector: 'page-promocionesadmin',
  templateUrl: 'promocionesadmin.html',
})
export class PromocionesadminPage {

  promociones = []
  promocionesLista = []
  ProductoService;
  datosUsuario;
  perfil;
  loading;
  submitted = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ProductoService: ProductoService,
              public loadingCtrl: LoadingController) 
  {

    this.ProductoService = ProductoService;
    this.listar_promociones();

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }

  // PARA ACTUALIZAR LOS DATOS

  Refrescar(refresher) 
  {
      console.log('Comienzo de la operación asincrónica', refresher);
      this.listar_promociones()
      setTimeout(() => {
        console.log('La operación asincrónica ha finalizado');
        refresher.complete();
      }, 2000);
  }
  
  listar_promociones() 
  {
         this.loading =this.loadingCtrl.create({
          spinner: "bubbles",
           content: "Cargando promociones...",
            });
             this.loading.present();

           this.ProductoService.listar_promociones().subscribe(
          data => {


             console.log(data);
             this.promociones=data
             this.promocionesLista= this.promociones
              if(data.length!=0){
                this.loading.dismiss();
              console.log('Tienes promociones agregadas');

              // this.navCtrl.push(SlidePage);
             }

              if(data.length===0){
                this.loading.dismiss();
               console.log('No hay promociones agregadas');
               //this.navCtrl.push(BienvenidaPage);
             }

            }, 

          err => {
            this.loading.dismiss();
            console.log(err)

          //() =>  console.log('cargar equipos complete')
          });
  } 

  enlace_agregar_promocion(){

    this.navCtrl.push(PromocionesagregaradminPage);

  }

  detalles(event,item) 
  {                
          window.localStorage.setItem('imagenPromocion', JSON.stringify(item));
          this.navCtrl.push(PromocionesadmineditarPage)
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocionesadminPage');
  }

}
