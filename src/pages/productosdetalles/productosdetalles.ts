import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ProductoService } from '../servicios/ProductosServices';


import { 
  ProductosPage,
  ProductoseditarPage
} from "../index.paginas";


@Component({
  selector: 'page-productosdetalles',
  templateUrl: 'productosdetalles.html',
})
export class ProductosdetallesPage {

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

  enlace_editar_producto(){
    this.navCtrl.push(ProductoseditarPage);
  }

  //ELIMINAR PRODUCTO

eliminar(form){

  this.submitted = true;

          if(form.valid) { 

            console.log(this.datosP.idProducto);

          let loading =this.loadingCtrl.create({
            spinner: "bubbles",
          content: "Eliminando producto, espere...",
            });
            loading.present();

          this.ProductoService.eliminar_producto(this.datosP.idProducto).subscribe(

            data => {
                this.userData = data;
                console.log(data); 
                loading.dismiss();
                  if(this.userData.estatus === "OK"){
                  
                    let alert = this.alertCtrl.create({
                    title: "¡EXITO!",
                    subTitle:"Tu producto fue eliminado correctamente",
                    buttons: [
                      {
                        text: 'DE ACUERDO',
                        handler: () => {
                          this.navCtrl.setRoot(ProductosPage)
                        }
                      }]
                  });
              alert.present();
       }
            if(this.userData.estatus === "ERROR"){

            let alert = this.alertCtrl.create({
              title: "¡ERROR!",
              subTitle:"No se pudo eliminar tu producto, intentalo nuevamente",
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
                  subTitle:"Ocurrio un problema para realizar la operación, intentalo mas tarde",
                  buttons: ["DE ACUERDO"]
              });
              alert.present();
            }
          );
        }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosdetallesPage');
  }

}
