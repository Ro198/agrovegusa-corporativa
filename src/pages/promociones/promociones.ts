import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProductoService } from '../servicios/ProductosServices';

@Component({
  selector: 'page-promociones',
  templateUrl: 'promociones.html',
})
export class PromocionesPage {
 
  promociones = []
  promocionesLista = []
  ProductoService;
  datosUsuario;
  perfil;
  loading;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ProductoService: ProductoService,
              public loadingCtrl: LoadingController) 
  {

    this.ProductoService=ProductoService;
    this.listar_promociones();


    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
    
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

   
  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocionesPage');
  }
  
}
