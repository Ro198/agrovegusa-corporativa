import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
  ProductosoflinemostrarPage,
  MenudistribuidormostrarPage,
  MenuclientemostrarPage
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
              public navParams: NavParams) 
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

    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosoflinePage');
  }

}
