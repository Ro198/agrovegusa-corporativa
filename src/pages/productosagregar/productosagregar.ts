import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { ProductoService } from '../servicios/ProductosServices';

@Component({
  selector: 'page-productosagregar',
  templateUrl: 'productosagregar.html',
})
export class ProductosagregarPage {

  datosProducto: { 
    marca?: string, 
    codigoKPI?: string,
    producto?: string,
    pClientePublico?: string,
    pAdminCondicion?: string,
    pVendedorDTODistribuidor?: string,
    pClienteMayorista?: string,
    pVendedorDistribuidor?: string,
    ventaV1Vendedor?: string,
    ventaV2Vendedor?: string,
    ventaV3Vendedor?: string,
    ventaV4Vendedor?: string,
    pAdminDeluxe?: string,
    porceniepsCliente?: string,
    porcenivaCliente?: string,
    existencias?: string
  } = {};

  ProductoService;
  datosUsuario;
  perfil;
  submitted = false;
  disableSubmit = false;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ProductoService: ProductoService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public viewCtrl: ViewController) 
  {

    this.ProductoService=ProductoService;

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
  }

//GUARDAR CLIENTE

guardar(form){

  this.submitted = true;
 
         if(form.valid) {
 
           console.log(this.datosProducto.marca);
           console.log(this.datosProducto.codigoKPI);
           console.log(this.datosProducto.producto);
           console.log(this.datosProducto.pClientePublico);
           console.log(this.datosProducto.pAdminCondicion);
           console.log(this.datosProducto.pVendedorDTODistribuidor);
           console.log(this.datosProducto.pClienteMayorista);
           console.log(this.datosProducto.pVendedorDistribuidor);
           console.log(this.datosProducto.ventaV1Vendedor);
           console.log(this.datosProducto.ventaV2Vendedor);
           console.log(this.datosProducto.ventaV3Vendedor);
           console.log(this.datosProducto.ventaV4Vendedor);
           console.log(this.datosProducto.pAdminDeluxe);
           console.log(this.datosProducto.porceniepsCliente);
           console.log(this.datosProducto.porcenivaCliente);
           console.log(this.datosProducto.existencias);

          let loading =this.loadingCtrl.create({
            spinner: "bubbles",
          content: "Guardando producto, espere...",
           });
          loading.present();
 
          this.ProductoService.agregar_producto(this.datosProducto.marca,
                                                this.datosProducto.codigoKPI, 
                                                this.datosProducto.producto,
                                                this.datosProducto.pClientePublico,
                                                this.datosProducto.pAdminCondicion, 
                                                this.datosProducto.pVendedorDTODistribuidor, 
                                                this.datosProducto.pClienteMayorista,                                              
                                                this.datosProducto.pVendedorDistribuidor,
                                                this.datosProducto.ventaV1Vendedor,
                                                this.datosProducto.ventaV2Vendedor,
                                                this.datosProducto.ventaV3Vendedor,
                                                this.datosProducto.ventaV4Vendedor,
                                                this.datosProducto.pAdminDeluxe,
                                                this.datosProducto.porceniepsCliente,
                                                this.datosProducto.porcenivaCliente,
                                                this.datosProducto.existencias).subscribe(
 
           data => {
               this.userData = data;
               console.log(data);
              loading.dismiss();
               if(this.userData.estatus === "OK"){
               //console.log('Usuario registrado');
               let alert = this.alertCtrl.create({
                title: "¡EXITO!",
                subTitle:"Tu producto fue registrado correctamente",
                buttons: [
                  {
                    text: 'DE ACUERDO',
                    handler: () => {
                    this.dismiss()
                    }
                  }]
                  });
                    alert.present();
 
 }
 
           if(this.userData.estatus === "ERROR"){
 
            let alert = this.alertCtrl.create({
             title: "¡ERROR!",
             subTitle:"No se pudo guardar tu producto, intentalo nuevamente",
             buttons: ["DE ACUERDO"]
                });
 
             alert.present();
           }
 
 
                 },
           err =>{
               //console.log(err);
               loading.dismiss();
               let alert = this.alertCtrl.create({
                 title: "¡ERROR DE CONEXION!",
                 subTitle:"Ocurrio un problema para realizar la operación, intentalo más tarde..",
                 buttons: ["DE ACUERDO"]
             });
              alert.present();
           }
 
          );
 
         }
 
 }

 dismiss() {
  this.viewCtrl.dismiss();
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosagregarPage');
  }

}
