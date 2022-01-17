import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { ProductoService } from '../servicios/ProductosServices';

import { 
  //ProductosPage
} from "../index.paginas";


@Component({
  selector: 'page-productoseditar',
  templateUrl: 'productoseditar.html',
})
export class ProductoseditarPage {

  editarProducto: { 
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
  BDProducto;
  datosP;
  userData;
  submitted = false;
  disableSubmit = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ProductoService: ProductoService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController) 
  {

  this.ProductoService=ProductoService;

  this.BDProducto  = window.localStorage.getItem('datosProducto')
  this.datosP = JSON.parse(this.BDProducto)
  console.log(this.datosP);


  this.datosUsuario  = window.localStorage.getItem('dataUser')
  this.perfil = JSON.parse(this.datosUsuario )
  console.log(this.perfil);

this.editarProducto.marca = this.datosP.marca;
this.editarProducto.codigoKPI = this.datosP.codigoKPI;
this.editarProducto.producto = this.datosP.producto;
this.editarProducto.pClientePublico = this.datosP.pClientePublico;
this.editarProducto.pAdminCondicion = this.datosP.pAdminCondicion;
this.editarProducto.pVendedorDTODistribuidor = this.datosP.pVendedorDTODistribuidor;
this.editarProducto.pClienteMayorista = this.datosP.pClienteMayorista;
this.editarProducto.pVendedorDistribuidor = this.datosP.pVendedorDistribuidor;
this.editarProducto.ventaV1Vendedor = this.datosP.ventaV1Vendedor;
this.editarProducto.ventaV2Vendedor = this.datosP.ventaV2Vendedor;
this.editarProducto.ventaV3Vendedor = this.datosP.ventaV3Vendedor;
this.editarProducto.ventaV4Vendedor = this.datosP.ventaV4Vendedor;
this.editarProducto.pAdminDeluxe = this.datosP.pAdminDeluxe;
this.editarProducto.porceniepsCliente = this.datosP.porceniepsCliente;
this.editarProducto.porcenivaCliente = this.datosP.porcenivaCliente;
this.editarProducto.existencias = this.datosP.existencias;


  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  //EDITAR CLIENTE

  editar(form){

    this.submitted = true;

            if(form.valid) {

              console.log(this.datosP.idProducto);
              console.log(this.editarProducto.marca);
              console.log(this.editarProducto.codigoKPI);
              console.log(this.editarProducto.producto);
              console.log(this.editarProducto.pClientePublico);
              console.log(this.editarProducto.pAdminCondicion);
              console.log(this.editarProducto.pVendedorDTODistribuidor);
              console.log(this.editarProducto.pClienteMayorista);
              console.log(this.editarProducto.pVendedorDistribuidor);
              console.log(this.editarProducto.ventaV1Vendedor);
              console.log(this.editarProducto.ventaV2Vendedor);
              console.log(this.editarProducto.ventaV3Vendedor);
              console.log(this.editarProducto.ventaV4Vendedor);
              console.log(this.editarProducto.pAdminDeluxe);
              console.log(this.editarProducto.porceniepsCliente);
              console.log(this.editarProducto.porcenivaCliente);
              console.log(this.editarProducto.existencias);

            let loading =this.loadingCtrl.create({
            content: "Modificando producto, espere...",
              });
              loading.present();

            this.ProductoService.editar_producto(this.datosP.idProducto, 
                                                this.editarProducto.marca,
                                                this.editarProducto.codigoKPI, 
                                                this.editarProducto.producto,
                                                this.editarProducto.pClientePublico,
                                                this.editarProducto.pAdminCondicion, 
                                                this.editarProducto.pVendedorDTODistribuidor, 
                                                this.editarProducto.pClienteMayorista,                                              
                                                this.editarProducto.pVendedorDistribuidor,
                                                this.editarProducto.ventaV1Vendedor,
                                                this.editarProducto.ventaV2Vendedor,
                                                this.editarProducto.ventaV3Vendedor,
                                                this.editarProducto.ventaV4Vendedor,
                                                this.editarProducto.pAdminDeluxe,
                                                this.editarProducto.porceniepsCliente,
                                                this.editarProducto.porcenivaCliente,
                                                this.editarProducto.existencias).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡OPERACION EXITOSA!",
                subTitle:"Datos modificados correctamente",
                buttons: [
                    {
                      text: 'DE ACUERDO',
                      handler: () => {
                        //this.navCtrl.setRoot(ProductosPage);
                        this.dismiss();
                      }
                    }]
               });
              alert.present();
             }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"Datos no modificados, intentalo nuevamente",
                buttons: ["DE ACUERDO"]
            });

                alert.present();
              }

                    },
              err =>{
                  console.log(err);
                  loading.dismiss();
                  let alert = this.alertCtrl.create({
                    title: "Error de conexión",
                    subTitle:"Ocurrio un problema para realizar la operación, intentalo más tarde",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
              }
            );
          }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoseditarPage');
  }


  

}




