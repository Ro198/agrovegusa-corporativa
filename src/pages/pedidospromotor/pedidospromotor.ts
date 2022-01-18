import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pedidospromotor',
  templateUrl: 'pedidospromotor.html',
})
export class PedidospromotorPage {



valuno=0;
valdos=0;
sumauno=0;
sumados=0;
resultado=0;
resultado2=0;
resultado3=0;

result=0;
result2=0;

valor=0;
valorPublico=0;
valorMayorista=0;

  BDProducto;
  datosP;
  datosUsuario;
  perfil;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {

    this.BDProducto  = window.localStorage.getItem('datosProducto')
    this.datosP = JSON.parse(this.BDProducto)
    console.log(this.datosP);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    this.valorPublico = this.datosP.pClientePublico;
    this.valorMayorista = this.datosP.pClienteMayorista;
    
  }

  operacion(){
 this.resultado = this.valuno*this.valdos;
 this.resultado2 = this.valuno/this.valdos;
 this.resultado3 = this.valuno-this.valdos;

 this.sumauno = this.valuno * 1;
 this.sumados = this.valdos * 1;
 console.log(this.resultado);
 
  }

  operacion2(){
  this.result = this.valor * this.valorPublico;
  this.result2 = this.valor * this.valorMayorista;




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidospromotorPage');
  }

}
