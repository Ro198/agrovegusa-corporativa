import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

@Component({
  selector: 'page-pedidospromotor',
  templateUrl: 'pedidospromotor.html',
})
export class PedidospromotorPage {

pdfObject = null;

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
              public navParams: NavParams,
              public file: File,
              public fileOpener: FileOpener,
              public platform: Platform) 
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

  generatePDF() {

    var docDefinition = {
      content: [
        'Hello World',
      ]
    };

    this.pdfObject = pdfMake.createPdf(docDefinition);

    alert('PDF Generado');
    
  }

  openPDF() {

    if(this.platform.is('cordova' )) {
      
      this.pdfObject.getBuffer((buffer) => {
        var utf8 = new Uint8Array(buffer);
        var binaryArray = utf8.buffer;
        var blob = new Blob([binaryArray], { type: 'application/pdf'});

        this.file.writeFile(this.file.dataDirectory, 'file.pdf', blob, { replace: true }).then(fileEntry => {
          this.fileOpener.open(this.file.dataDirectory + 'file.pdf', 'application/pdf');
        })
      });
    }else{
      this.pdfObject.download();
    }
  }













  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidospromotorPage');
  }

}
