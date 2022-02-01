import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { UsuarioService } from '../servicios/UsuarioServices';

import { UsuarioseditarPage
} from "../index.paginas";

@Component({
  selector: 'page-usuariosmostrar',
  templateUrl: 'usuariosmostrar.html',
})
export class UsuariosmostrarPage {

  datosUsuario;
  perfil;
  BDUsuario;
  datosU;
  submitted = false;
  UsuarioService;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              UsuarioService: UsuarioService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController) 
  {
    this.UsuarioService=UsuarioService;
  
    this.BDUsuario  = window.localStorage.getItem('infoUsuario')
    this.datosU = JSON.parse(this.BDUsuario )
    console.log(this.datosU);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }

  enlace_editar_producto(){
    this.navCtrl.push(UsuarioseditarPage);
  }

  //ELIMINAR USUARIO

  eliminar(form){

    this.submitted = true;
  
            if(form.valid) {
  
              console.log(this.datosU.idUsuario);
  
            let loading =this.loadingCtrl.create({
              spinner: "bubbles",
            content: "Eliminando usuario, espere...",
              });
              loading.present();
  
            this.UsuarioService.eliminar_usuario(this.datosU.idUsuario).subscribe(
  
              data => {
                  this.userData = data;
                  console.log(data); 
                  loading.dismiss();
                    if(this.userData.estatus === "OK"){
                    
                      let alert = this.alertCtrl.create({
                      title: "¡EXITO!",
                      subTitle:"Tu usuario fue eliminado correctamente",
                      buttons: [
                        {
                          text: 'DE ACUERDO',
                          handler: () => {
                            //this.navCtrl.setRoot(ClientesPage)
                            this.dismiss()
                          }
                        }]
                    });
                alert.present();
         }
              if(this.userData.estatus === "ERROR"){
  
              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo eliminar tu usuario, intentalo nuevamente",
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

  dismiss() {
    this.viewCtrl.dismiss();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosmostrarPage');
  }

}
