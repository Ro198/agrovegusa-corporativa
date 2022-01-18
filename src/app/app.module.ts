import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { Push } from '@ionic-native/push';
import { EmailComposer } from '@ionic-native/email-composer';
import { MyApp } from './app.component';

import { LoginService } from '../pages/servicios/LoginServices';
import { ProductoService } from '../pages/servicios/ProductosServices';
import { UsuarioService } from '../pages/servicios/UsuarioServices';
import { PromocionesFotoService } from '../pages/servicios/PromocionesFotoServices';

import {LoginPage,
  MenuadministradorPage,
  ProductosPage,
  ProductosdetallesPage,
  ProductosagregarPage,
  ProductoseditarPage,
  AcuerdoPage,
  MenuclientePage,
  MenudistribuidorPage,
  ProductosagotadosPage,
  UsuarioslistaPage,
  UsuariosmostrarPage,
  UsuariosagregarPage,
  UsuarioseditarPage,
  MenudistribuidorproductoPage,
  MenudistribuidoragotadosPage,
  MenudistribuidormostrarPage,
  MenuclienteagotadosPage,
  MenuclientemostrarPage,
  MenuclienteproductoPage,
  PromocionesPage,
  PromocionesadminPage,
  ProductosoflinePage,
  ProductosoflinemostrarPage,
  PromocionesagregaradminPage,
  PromocionesadmineditarPage,
  MenuadministradoresPage,
  AdministradorespromocionPage,
  AdministradorespromocioneditarPage,
  PedidospromotorPage
} from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuadministradorPage,
    ProductosPage,
    ProductosdetallesPage,
    ProductosagregarPage,
    ProductoseditarPage,
    AcuerdoPage,
    MenuclientePage,
    MenudistribuidorPage,
    ProductosagotadosPage,
    UsuarioslistaPage,
    UsuariosmostrarPage,
    UsuariosagregarPage,
    UsuarioseditarPage,
    MenudistribuidorproductoPage,
    MenudistribuidoragotadosPage,
    MenudistribuidormostrarPage,
    MenuclienteagotadosPage,
    MenuclientemostrarPage,
    MenuclienteproductoPage,
    PromocionesPage,
    PromocionesadminPage,
    ProductosoflinePage,
    ProductosoflinemostrarPage,
    PromocionesagregaradminPage,
    PromocionesadmineditarPage,
    MenuadministradoresPage,
    AdministradorespromocionPage,
    AdministradorespromocioneditarPage,
    PedidospromotorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuadministradorPage,
    ProductosPage,
    ProductosdetallesPage,
    ProductosagregarPage,
    ProductoseditarPage,
    AcuerdoPage,
    MenuclientePage,
    MenudistribuidorPage,
    ProductosagotadosPage,
    UsuarioslistaPage,
    UsuariosmostrarPage,
    UsuariosagregarPage,
    UsuarioseditarPage,
    MenudistribuidorproductoPage,
    MenudistribuidoragotadosPage,
    MenudistribuidormostrarPage,
    MenuclienteagotadosPage,
    MenuclientemostrarPage,
    MenuclienteproductoPage,
    PromocionesPage,
    PromocionesadminPage,
    ProductosoflinePage,
    ProductosoflinemostrarPage,
    PromocionesagregaradminPage,
    PromocionesadmineditarPage,
    MenuadministradoresPage,
    AdministradorespromocionPage,
    AdministradorespromocioneditarPage,
    PedidospromotorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    Camera,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, LoginService, ProductoService, UsuarioService, PromocionesFotoService
  ]
})
export class AppModule {}
