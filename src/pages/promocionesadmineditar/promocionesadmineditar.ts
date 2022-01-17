import { Component } from '@angular/core';
import {  NavController, 
  NavParams, 
  LoadingController, 
  AlertController, 
  ViewController, 
  ActionSheetController,
  Platform } from 'ionic-angular';

  import { Camera, CameraOptions } from '@ionic-native/camera';
  import { PromocionesFotoService } from '../servicios/PromocionesFotoServices';



@Component({
  selector: 'page-promocionesadmineditar',
  templateUrl: 'promocionesadmineditar.html',
})
export class PromocionesadmineditarPage {

  uploadFile: any;
  options: Object = {
      url2: 'http://54.209.82.90/agrovegusa/API/foto.php'
  };   

  captureDataUrl: string;

  imagenProFoto: { 
    foto?: string      
  } = {};

  PromocionesFotoService;
  datosUsuario;
  perfil;
  imagenPromocion;
  imagenP;
  submitted = false;
  imagen;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              PromocionesFotoService: PromocionesFotoService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public actionCtrl: ActionSheetController,
              public platform: Platform,
              private camera: Camera,
              private viewCtrl: ViewController) 
  {

    this.PromocionesFotoService = PromocionesFotoService;

    this.imagenPromocion  = window.localStorage.getItem('imagenPromocion')
    this.imagenP = JSON.parse(this.imagenPromocion )
    console.log(this.imagenP);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  //EDITAR VEHICULO

  editar(form){

    this.submitted = true;

            if(form.valid) {

              console.log(this.imagenP.idPromocion);
              console.log(this.imagenProFoto.foto);
 

            let loading =this.loadingCtrl.create({
            content: "Cambiando la imagen, espere...",
              });
              loading.present();

              this.imagen  = window.localStorage.getItem('foto')

        this.PromocionesFotoService.editarPromocion(this.imagenP.idPromocion, 
                                                    this.imagen).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡OPERACION EXITOSA!",
                subTitle:"Tu imagen se cambio correctamente",
                buttons: [
                    {
                      text: 'DE ACUERDO',
                      handler: () => {
                        this.dismiss();
                      }
                    }]
               });
              alert.present();
             }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo cambiar tu imagen, intentalo nuevamente",
                buttons: ["DE ACUERDO"]
            });

                alert.present();
              }

                    },
              err =>{
                  //console.log(err);
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

  upload(){
          
        let actionsheet =this.actionCtrl.create({
        title:'Elige una opción',
        buttons:[{
        text:'Libreria',
        icon: !this.platform.is('md') ? 'images' : null,
        handler:()=>{
          // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          this.libreria('Libreria')
          console.log('archivos del dispositivo')
        }
        },{
          text:'Camara',
          icon: !this.platform.is('md') ? 'camera' : null,
          handler:()=>{
            this.camara('Camara')
            console.log('Camara del dispositivo')
          }
        },{
          text:'Cancelar',
          role: 'destructive',
          icon: !this.platform.is('md') ? 'close-circle' : null,
          handler:()=>{
            console.log('se cancelo la operacion')
        }
      }]
      });
      actionsheet.present()
  }

  libreria(info){

        const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }

        this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:


        this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        window.localStorage.setItem('foto', this.captureDataUrl);
        }, (err) => {
        // Handle error
        });

  }

  camara(info){

        const cameraOptions: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        };

        this.camera.getPicture(cameraOptions).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        window.localStorage.setItem('foto', this.captureDataUrl);
        }, (err) => {
        // Handle error
        });
  }

   //ELIMINAR VEHICULO

   eliminar(form){
    
    this.submitted = true;

            if(form.valid) {

              console.log(this.imagenP.idPromocion);


            let loading =this.loadingCtrl.create({
            content: "Eliminando imagen, espere...",
              });
              loading.present();


            this.PromocionesFotoService.eliminarPromocion(this.imagenP.idPromocion).subscribe(

              data => {
                  this.userData = data;
                  console.log(data);
                loading.dismiss();



                  if(this.userData.estatus === "OK"){
                  //console.log('Usuario registrado');
                  let alert = this.alertCtrl.create({
                  title: "¡OPERACION EXITOSA!",
                  subTitle:"Tu imagen se elimino correctamente",
                  buttons: [
        {
          text: 'DE ACUERDO',
          handler: () => {
            this.dismiss();
          }
        }]
              }); 
              alert.present();
    }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo eliminar esta imagen, intentalo nuevamente",
                buttons: ["DE ACUERDO"]
            });

                alert.present();
              }


                    },
              err =>{
                  //console.log(err);
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
    console.log('ionViewDidLoad PromocionesadmineditarPage');
  }

}
