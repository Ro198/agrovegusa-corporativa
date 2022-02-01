import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ActionSheetController, Platform } from 'ionic-angular';
import { PromocionesFotoService } from '../servicios/PromocionesFotoServices';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { 
  PromocionesadminPage
} from "../index.paginas";

@Component({
  selector: 'page-promocionesagregaradmin',
  templateUrl: 'promocionesagregaradmin.html',
})
export class PromocionesagregaradminPage {

  captureDataUrl: string;

  fotoPromocion: { 
    foto?: string    
  } = {};


  PromocionesFotoService;
  datosUsuario;
  perfil;
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
              private camera: Camera) 
  {

    this.PromocionesFotoService = PromocionesFotoService;

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);


  }

  guardar(form){
  
    this.submitted = true;

            if(form.valid) {

              console.log(this.fotoPromocion.foto);


            let loading =this.loadingCtrl.create({
              spinner: "bubbles",
            content: "Guardando imagen...",});
              loading.present();

            this.imagen  = window.localStorage.getItem('foto')

            this.PromocionesFotoService.agregarPromocion(this.imagen).subscribe(

  data => {
                this.userData = data;
                console.log(data);
                loading.dismiss();
                  if(this.userData.estatus === "OK"){
                  let alert = this.alertCtrl.create({
                  title: "¡EXITO!",
                  subTitle:"Imagen agregada correctamente",
                  buttons: [
                      {
                        text: 'DE ACUERDO',
                        handler: () => {
                          this.navCtrl.setRoot(PromocionesadminPage);
                        }
                      }]
                                });
                             alert.present();
                      }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo agregar tu imagen, intentalo nuevamente",
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
                    subTitle:"Ocurrio un problema para realizar la operación, intentalo más tarde..",
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocionesagregaradminPage');
  }

}
