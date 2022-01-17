import { Component } from '@angular/core';
import { NavController, 
         NavParams,
         ToastController,
         LoadingController,
         AlertController,
         MenuController } from 'ionic-angular';

import { LoginService } from "../servicios/LoginServices";

import { EmailComposer } from "@ionic-native/email-composer";

import { AcuerdoPage } from "../index.paginas";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: { username?: string; password?: string } = {};

  loginService;
  loading;
  retrievedString;
  currentMasc;
  submitted = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              loginService: LoginService,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private menuCtrl: MenuController,
              private emailComposer: EmailComposer) 
  {


    this.menuCtrl.enable(false, "myMenu");
    this.loginService = loginService;

  }

  solicitar(){

  }

  
  email(){
    //this.navCtrl.push(EmailPage);
   }


   //LOGIN USUARIO
  
loginUser(form) {
  this.submitted = true;
  console.log(this.login.username);
  console.log(this.login.password);
  if (form.valid) {
    this.loading = this.loadingCtrl.create({
      content: "Ingresando a Agrovegusa, espere..."
    });
    this.loading.present();

    this.loginService
      .loginUsuario(this.login.username, this.login.password)
      .subscribe(
        data => {
          console.log(data);
          this.loading.dismiss();

          if (data.length == 0) {
            console.log("No existen datos");
            let toast = this.toastCtrl.create({
              message: "Usuario y/o contraseña invalidos",
              duration: 3000,
              position: "middle"
            });

            toast.onDidDismiss(() => {
              console.log("Dismissed toast");
            });

            toast.present();
          } else {

            console.log(" El usuario existe");
            window.localStorage.setItem("dataUser", JSON.stringify(data[0]));

            this.navCtrl.push(AcuerdoPage);

          }
        },
        err => {
          console.log(err);
          this.loading.dismiss();
          let toast = this.toastCtrl.create({
            message:
              "Ocurrio un problema para realizar la operación, intentalo más tarde...",
            duration: 3000,
            position: "middle"
          });

          toast.onDidDismiss(() => {
            console.log("Dismissed toast");
          });

          toast.present();
        }
        //() => console.log('Verificacion completa')
      );
  } else {
   
      let toast = this.toastCtrl.create({
        message:
          "por favor, completa todos los campos",
        duration: 3000,
        position: "middle"
      });

      toast.onDidDismiss(() => {
        console.log("por favor, completa todos los campos");
      });

      toast.present(); 
  }
}

mensaje() {
  this.emailComposer.addAlias("gmail", "com.google.android.gm");

  this.emailComposer.isAvailable().then((available: boolean) => {
    if (available) {
      //Now we know we can send
    }
  });

  let email = {
    to: "agrovegu@gmail.com",
    //from: 'mipet@grandpet.com',
    //cc: 'info@grandpet.com',
    attachments: [
      /* "file://img/mipet.png" */
      //'res://petchico.png',
      //'base64:pet.png//iVBORw0KGgoAAAANSUhEUg...',
    ],
    subject: "Solicitud para ser nuestro cliente dentro de Agrovegusa",
    body:
      "Hola buen día. <br> Por favor llena los siguientes datos para dar seguimiento a tu solicitud. <br><br> Nombre: <br> Correo electronico: <br> Telefono: <br> Ciudad: <br> Estado:<br><br><br><br><br><br><br><br><br> ¡Este mensaje se ha enviado desde la aplicación de Agrovegusa!",
    isHtml: true
  };

  // Send a text message using default options
  this.emailComposer.open(email);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
