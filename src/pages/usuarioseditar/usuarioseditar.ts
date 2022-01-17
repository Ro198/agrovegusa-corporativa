import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { UsuarioService } from '../servicios/UsuarioServices';

@Component({
  selector: 'page-usuarioseditar',
  templateUrl: 'usuarioseditar.html',
})
export class UsuarioseditarPage {

  editarBDUsuario: { 
    Username?: string,
    Pass?: string,
    nombreUsuario?: string, 
    municipio?: string,
    estado?: string,
    telefono?: string,
    Correo?: string,
    numeroPromotor?: string,
    tipoCuenta?: string
  } = {};

  submitted = false;
  disableSubmit = false;

  datosUsuario; 
  perfil;
  BDUsuario;
  datosU;
  UsuarioService;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              UsuarioService: UsuarioService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public viewCtrl: ViewController) 
  {
    this.UsuarioService=UsuarioService;

    this.BDUsuario  = window.localStorage.getItem('infoUsuario')
    this.datosU = JSON.parse(this.BDUsuario)
    console.log(this.datosU);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario)
    console.log(this.perfil);


    this.editarBDUsuario.Username = this.datosU.Username;
    this.editarBDUsuario.Pass = this.datosU.Pass;
    this.editarBDUsuario.nombreUsuario = this.datosU.nombreUsuario; 
    this.editarBDUsuario.municipio = this.datosU.municipio;
    this.editarBDUsuario.estado = this.datosU.estado;
    this.editarBDUsuario.telefono = this.datosU.telefono;   
    this.editarBDUsuario.Correo = this.datosU.Correo;
    this.editarBDUsuario.numeroPromotor = this.datosU.numeroPromotor; 
    this.editarBDUsuario.tipoCuenta = this.datosU.tipoCuenta; 


  }


   //EDITAR CLIENTE

   editar(form){

    this.submitted = true;

            if(form.valid) {

             console.log(this.datosU.idUsuario);
             console.log(this.editarBDUsuario.Username);
             console.log(this.editarBDUsuario.Pass);
             console.log(this.editarBDUsuario.nombreUsuario);
             console.log(this.editarBDUsuario.municipio);
             console.log(this.editarBDUsuario.estado);
             console.log(this.editarBDUsuario.telefono);
             console.log(this.editarBDUsuario.Correo);
             console.log(this.editarBDUsuario.numeroPromotor);
             console.log(this.editarBDUsuario.tipoCuenta);


            let loading =this.loadingCtrl.create({
            content: "Guardando cambios,, espere...",
              });
              loading.present();

             this.UsuarioService.editar_usuario(this.datosU.idUsuario, 
                                                this.editarBDUsuario.Username, 
                                                this.editarBDUsuario.Pass,
                                                this.editarBDUsuario.nombreUsuario,
                                                this.editarBDUsuario.municipio,
                                                this.editarBDUsuario.estado,
                                                this.editarBDUsuario.telefono,     
                                                this.editarBDUsuario.Correo,
                                                this.editarBDUsuario.numeroPromotor,  
                                                this.editarBDUsuario.tipoCuenta).subscribe(

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

dismiss() {
  this.viewCtrl.dismiss();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioseditarPage');
  }

  
}
