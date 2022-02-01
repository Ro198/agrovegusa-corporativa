import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { 
  ProductosoflinemostrarPage,
  MenudistribuidormostrarPage,
  MenuclientemostrarPage,
  MenuadministradorPage,
  MenudistribuidorPage,
  MenuclientePage,
  MenuadministradoresPage
} from "../index.paginas";


@Component({
  selector: 'page-productosofline',
  templateUrl: 'productosofline.html',
})
export class ProductosoflinePage {

  producto;
  datosP;
  datosUsuario;
  perfil;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) 
  {

    let productos = JSON.parse( localStorage.getItem("productos") );
    this.datosP = productos
    console.log( this.datosP );


    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);


    
  }

  detalles(event,item) 
  {                

    if(this.perfil.tipoCuenta == 1){             
      window.localStorage.setItem('datosProducto', JSON.stringify(item));
      this.navCtrl.push(ProductosoflinemostrarPage);

    }else if (this.perfil.tipoCuenta == 2){             
      window.localStorage.setItem('datosProducto', JSON.stringify(item));
      this.navCtrl.push(MenudistribuidormostrarPage);

    }else if (this.perfil.tipoCuenta == 3){             
      window.localStorage.setItem('datosProducto', JSON.stringify(item));
      this.navCtrl.push(MenuclientemostrarPage);

    }else if (this.perfil.tipoCuenta == 4){             
      window.localStorage.setItem('datosProducto', JSON.stringify(item));
      this.navCtrl.push(MenudistribuidormostrarPage);

    }
 
  }

    // BARRA DE BUSCADOR
 
    marca(ev: any) {

      this.datosP = this.datosP
      
      let val = ev.target.value;
  
      if (val && val.trim() != '') {
     this.datosP =this.datosP.filter((item) => {
          return (item.marca.toString().toLowerCase().indexOf(val.toLowerCase()) =="");
        })
      }
    }
  
    productoo(ev: any) {
  
      this.datosP = this.datosP
      
      let val = ev.target.value;
  
      if (val && val.trim() != '') {
     this.datosP =this.datosP.filter((item) => {
          return (item.producto.toString().toLowerCase().indexOf(val.toLowerCase()) =="");
        })
      }
    }

    cargar_lista_ofline(){

      let alert = this.alertCtrl.create({
        title: "¡ATENCION!",
        message: "¿Quieres volver a cargar la lista?",
        buttons: [
          {
            text: "NO, POR EL MOMENTO",
            role: "cancel",
            handler: () => {}
          },
          {
            text: "SI, POR FAVOR",
            handler: () => {
              this.navCtrl.setRoot(ProductosoflinePage);
            }
          }
         
        ]
      });
      alert.present();
   
     
    }

    regresar_menu(){
      
      this.datosUsuario  = window.localStorage.getItem('dataUser')
      this.perfil = JSON.parse(this.datosUsuario )
  
      if(this.perfil.tipoCuenta == 1){
  
            this.navCtrl.setRoot(MenuadministradorPage);
      }
      else if(this.perfil.tipoCuenta == 2){
  
            this.navCtrl.setRoot(MenudistribuidorPage);
      }
      else if(this.perfil.tipoCuenta == 3){
  
          this.navCtrl.setRoot(MenuclientePage);
    }
    else if(this.perfil.tipoCuenta == 4){

        this.navCtrl.setRoot(MenuadministradoresPage);
  }
      else{
            let alert = this.alertCtrl.create({
            title: '¡ERROR!',
            subTitle: 'Algo salio mal...',
            buttons: ['OK']
              });
            alert.present();
            }


 

    }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosoflinePage');
  }

}
