import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { UsuarioService } from '../servicios/UsuarioServices';

@Component({
  selector: 'page-usuariosagregar',
  templateUrl: 'usuariosagregar.html',
})
export class UsuariosagregarPage {


  datosBDUsuario: { 
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


  datosUsuario;
  perfil;
  UsuarioService;
  userData;
  submitted = false;
  disableSubmit = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              UsuarioService: UsuarioService,
              public loadingCtrl: LoadingController,
              public viewCtrl: ViewController,
              public alertCtrl: AlertController) 
  {

    this.UsuarioService=UsuarioService;
    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    
  }

  //GUARDAR USUARIO

  guardar(form){

    this.submitted = true;
   
           if(form.valid) {
   
             console.log(this.datosBDUsuario.Username);
             console.log(this.datosBDUsuario.Pass);
             console.log(this.datosBDUsuario.nombreUsuario);
             console.log(this.datosBDUsuario.municipio);
             console.log(this.datosBDUsuario.estado);
             console.log(this.datosBDUsuario.telefono);
             console.log(this.datosBDUsuario.Correo);
             console.log(this.datosBDUsuario.numeroPromotor);
             console.log(this.datosBDUsuario.tipoCuenta);

            let loading =this.loadingCtrl.create({
            content: "Guardando usuario espere...",
             });
            loading.present();
   
            this.UsuarioService.agregar_usuario(this.datosBDUsuario.Username,
                                                this.datosBDUsuario.Pass,
                                                this.datosBDUsuario.nombreUsuario,
                                                this.datosBDUsuario.municipio,
                                                this.datosBDUsuario.estado,
                                                this.datosBDUsuario.telefono,     
                                                this.datosBDUsuario.Correo,
                                                this.datosBDUsuario.numeroPromotor,  
                                                this.datosBDUsuario.tipoCuenta).subscribe(
   
             data => {
                 this.userData = data;
                 console.log(data);
                loading.dismiss();
                 if(this.userData.estatus === "OK"){
                 //console.log('Usuario registrado');
                 let alert = this.alertCtrl.create({
                  title: "¡EXCELENTE!",
                  subTitle:"Tu usuario fue registrado correctamente",
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
               subTitle:"No se pudo registrar tu usuario, intentalo nuevamente",
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
    console.log('ionViewDidLoad UsuariosagregarPage');
  }

}
