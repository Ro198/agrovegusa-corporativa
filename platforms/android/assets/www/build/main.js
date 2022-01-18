webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_URL__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoService = (function () {
    function ProductoService(http) {
        this.http = http;
        this.http = http;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__servicios_URL__["a" /* url */];
    }
    //Listar promociones
    ProductoService.prototype.listar_promociones = function () {
        this.params = 'action=listar_promociones';
        var url = this.serverUrl + this.params;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    /*
        //LISTAR PRODUCTOS DE DOS TABLAS, PRODUCTOS Y USUARIOS
    
        listarTodosLosProductos(){
            this.params= 'action=listarTodosLosProductos'
            var url = this.serverUrl+ this.params;
            return this.http.get(url).map(res => res.json());
        }
    
    
          conteo_productos_totales(){
            this.params= 'action=conteo_productos_totales'
            var url = this.serverUrl+ this.params;
            return this.http.get(url).map(res => res.json());
        }
    
    
     */
    //Todos los productos
    ProductoService.prototype.listar_productos = function () {
        this.params = 'action=listar_productos';
        var url = this.serverUrl + this.params;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    //Productos con existencias
    ProductoService.prototype.lista_productos_existencias = function () {
        this.params = 'action=lista_productos_existencias';
        var url = this.serverUrl + this.params;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    //Productos agotados
    ProductoService.prototype.lista_productos_agotados = function () {
        this.params = 'action=lista_productos_agotados';
        var url = this.serverUrl + this.params;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    //AGREGAR PRODUCTO
    ProductoService.prototype.agregar_producto = function (marca, codigoKPI, producto, pClientePublico, pAdminCondicion, pVendedorDTODistribuidor, pClienteMayorista, pVendedorDistribuidor, ventaV1Vendedor, ventaV2Vendedor, ventaV3Vendedor, ventaV4Vendedor, pAdminDeluxe, porceniepsCliente, porcenivaCliente, existencias) {
        this.params = 'action=agregar_producto&marca=' + marca
            + '&codigoKPI=' + codigoKPI
            + '&producto=' + producto
            + '&pClientePublico=' + pClientePublico
            + '&pAdminCondicion=' + pAdminCondicion
            + '&pVendedorDTODistribuidor=' + pVendedorDTODistribuidor
            + '&pClienteMayorista=' + pClienteMayorista
            + '&pVendedorDistribuidor=' + pVendedorDistribuidor
            + '&ventaV1Vendedor=' + ventaV1Vendedor
            + '&ventaV2Vendedor=' + ventaV2Vendedor
            + '&ventaV3Vendedor=' + ventaV3Vendedor
            + '&ventaV4Vendedor=' + ventaV4Vendedor
            + '&pAdminDeluxe=' + pAdminDeluxe
            + '&porceniepsCliente=' + porceniepsCliente
            + '&porcenivaCliente=' + porcenivaCliente
            + '&existencias=' + existencias;
        var url = this.serverUrl + this.params;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    //EDITAR PRODUCTO
    ProductoService.prototype.editar_producto = function (idProducto, marca, codigoKPI, producto, pClientePublico, pAdminCondicion, pVendedorDTODistribuidor, pClienteMayorista, pVendedorDistribuidor, ventaV1Vendedor, ventaV2Vendedor, ventaV3Vendedor, ventaV4Vendedor, pAdminDeluxe, porceniepsCliente, porcenivaCliente, existencias) {
        this.params = 'action=editar_producto&idProducto=' + idProducto
            + '&marca=' + marca
            + '&codigoKPI=' + codigoKPI
            + '&producto=' + producto
            + '&pClientePublico=' + pClientePublico
            + '&pAdminCondicion=' + pAdminCondicion
            + '&pVendedorDTODistribuidor=' + pVendedorDTODistribuidor
            + '&pClienteMayorista=' + pClienteMayorista
            + '&pVendedorDistribuidor=' + pVendedorDistribuidor
            + '&ventaV1Vendedor=' + ventaV1Vendedor
            + '&ventaV2Vendedor=' + ventaV2Vendedor
            + '&ventaV3Vendedor=' + ventaV3Vendedor
            + '&ventaV4Vendedor=' + ventaV4Vendedor
            + '&pAdminDeluxe=' + pAdminDeluxe
            + '&porceniepsCliente=' + porceniepsCliente
            + '&porcenivaCliente=' + porcenivaCliente
            + '&existencias=' + existencias;
        var url = this.serverUrl + this.params;
        //console.log(url);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    //ELIMINAR PRODUCTO
    ProductoService.prototype.eliminar_producto = function (idProducto) {
        this.params = 'action=eliminar_producto&idProducto=' + idProducto;
        var url = this.serverUrl + this.params;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProductoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductoService);
    return ProductoService;
}());

//# sourceMappingURL=ProductosServices.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_URL__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.http = http;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__servicios_URL__["a" /* url */];
    }
    //LOGEARSE
    LoginService.prototype.loginUsuario = function (username, password) {
        this.params = 'action=login&Username=' + username + '&Pass=' + password;
        var url = this.serverUrl + this.params;
        //console.log(url);
        //contacto/login?username='+username+'&password='+password 
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=LoginServices.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(228);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_email_composer__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_servicios_LoginServices__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_servicios_ProductosServices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_servicios_UsuarioServices__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_servicios_PromocionesFotoServices__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["d" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["e" /* MenuadministradorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["o" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["r" /* ProductosdetallesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["q" /* ProductosagregarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["s" /* ProductoseditarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["a" /* AcuerdoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["g" /* MenuclientePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["k" /* MenudistribuidorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["p" /* ProductosagotadosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["B" /* UsuarioslistaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["C" /* UsuariosmostrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["z" /* UsuariosagregarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["A" /* UsuarioseditarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["n" /* MenudistribuidorproductoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["l" /* MenudistribuidoragotadosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["m" /* MenudistribuidormostrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["h" /* MenuclienteagotadosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["i" /* MenuclientemostrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["j" /* MenuclienteproductoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["v" /* PromocionesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["w" /* PromocionesadminPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["t" /* ProductosoflinePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["u" /* ProductosoflinemostrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["y" /* PromocionesagregaradminPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["x" /* PromocionesadmineditarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["f" /* MenuadministradoresPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["b" /* AdministradorespromocionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["c" /* AdministradorespromocioneditarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["d" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["e" /* MenuadministradorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["o" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["r" /* ProductosdetallesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["q" /* ProductosagregarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["s" /* ProductoseditarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["a" /* AcuerdoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["g" /* MenuclientePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["k" /* MenudistribuidorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["p" /* ProductosagotadosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["B" /* UsuarioslistaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["C" /* UsuariosmostrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["z" /* UsuariosagregarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["A" /* UsuarioseditarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["n" /* MenudistribuidorproductoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["l" /* MenudistribuidoragotadosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["m" /* MenudistribuidormostrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["h" /* MenuclienteagotadosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["i" /* MenuclientemostrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["j" /* MenuclienteproductoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["v" /* PromocionesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["w" /* PromocionesadminPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["t" /* ProductosoflinePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["u" /* ProductosoflinemostrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["y" /* PromocionesagregaradminPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["x" /* PromocionesadmineditarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["f" /* MenuadministradoresPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["b" /* AdministradorespromocionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_index_paginas__["c" /* AdministradorespromocioneditarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_10__pages_servicios_LoginServices__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_11__pages_servicios_ProductosServices__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_12__pages_servicios_UsuarioServices__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_13__pages_servicios_PromocionesFotoServices__["a" /* PromocionesFotoService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, push) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.push = push;
        //rootPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_index_paginas__["d" /* LoginPage */];
        this.initializeApp();
        this.datosUser = localStorage.getItem("dataUser");
        this.userData = JSON.parse(this.datosUser);
        platform.registerBackButtonAction(function () {
            var alert = alertCtrl.create({
                title: "Salir",
                message: "¿Deseas salir de la aplicación?",
                buttons: [
                    {
                        text: "Cancelar",
                        role: "cancel",
                        handler: function () { }
                    },
                    {
                        text: "Salir",
                        handler: function () {
                            navigator["app"].exitApp();
                        }
                    }
                ]
            });
            alert.present();
            // navigator['app'].exitApp();
        });
        //CERRAR SESION Y NO CERRAR SESION MIENTRAS SE INICIA
        if (this.userData == null) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_index_paginas__["d" /* LoginPage */];
        }
        else if (this.userData.tipoCuenta == 1) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_index_paginas__["e" /* MenuadministradorPage */];
        }
        else if (this.userData.tipoCuenta == 2) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_index_paginas__["k" /* MenudistribuidorPage */];
        }
        else if (this.userData.tipoCuenta == 3) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_index_paginas__["g" /* MenuclientePage */];
        }
        else if (this.userData.tipoCuenta == 4) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_index_paginas__["f" /* MenuadministradoresPage */];
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.statusBar.backgroundColorByHexString('#ffffff');
            _this.pushSetup();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pushSetup = function () {
        var options = {
            android: {
                senderID: '953521865926'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_LoginServices__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loginService, toastCtrl, loadingCtrl, alertCtrl, menuCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.emailComposer = emailComposer;
        this.login = {};
        this.submitted = false;
        this.menuCtrl.enable(false, "myMenu");
        this.loginService = loginService;
    }
    LoginPage.prototype.solicitar = function () {
    };
    LoginPage.prototype.email = function () {
        //this.navCtrl.push(EmailPage);
    };
    //LOGIN USUARIO
    LoginPage.prototype.loginUser = function (form) {
        var _this = this;
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
                .subscribe(function (data) {
                console.log(data);
                _this.loading.dismiss();
                if (data.length == 0) {
                    console.log("No existen datos");
                    var toast = _this.toastCtrl.create({
                        message: "Usuario y/o contraseña invalidos",
                        duration: 3000,
                        position: "middle"
                    });
                    toast.onDidDismiss(function () {
                        console.log("Dismissed toast");
                    });
                    toast.present();
                }
                else {
                    console.log(" El usuario existe");
                    window.localStorage.setItem("dataUser", JSON.stringify(data[0]));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__index_paginas__["a" /* AcuerdoPage */]);
                }
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Ocurrio un problema para realizar la operación, intentalo más tarde...",
                    duration: 3000,
                    position: "middle"
                });
                toast.onDidDismiss(function () {
                    console.log("Dismissed toast");
                });
                toast.present();
            }
            //() => console.log('Verificacion completa')
            );
        }
        else {
            var toast = this.toastCtrl.create({
                message: "por favor, completa todos los campos",
                duration: 3000,
                position: "middle"
            });
            toast.onDidDismiss(function () {
                console.log("por favor, completa todos los campos");
            });
            toast.present();
        }
    };
    LoginPage.prototype.mensaje = function () {
        this.emailComposer.addAlias("gmail", "com.google.android.gm");
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
        var email = {
            to: "agrovegu@gmail.com",
            //from: 'mipet@grandpet.com',
            //cc: 'info@grandpet.com',
            attachments: [],
            subject: "Solicitud para ser nuestro cliente dentro de Agrovegusa",
            body: "Hola buen día. <br> Por favor llena los siguientes datos para dar seguimiento a tu solicitud. <br><br> Nombre: <br> Correo electronico: <br> Telefono: <br> Ciudad: <br> Estado:<br><br><br><br><br><br><br><br><br> ¡Este mensaje se ha enviado desde la aplicación de Agrovegusa!",
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\login\login.html"*/`\n<ion-content>\n  <br>\n\n<div style="text-align: left;">\n  <img src="img/logo.png" style="width : 70% ; margin-top: 50px;"><br>\n</div>\n\n  <p style="text-align: center; color: #4A6D68;">Aplicación móvil para uso <br> interno de la empresa</p>\n\n  <form #loginForm="ngForm" id="form">\n   \n    <ion-item clearInput class="item-md">\n      <ion-icon class="icono" name="person" subtle large item-left></ion-icon>\n      <ion-input required spellcheck="false" type="text" [(ngModel)]="login.username" name="username"\n        #username="ngModel" spellcheck="false" required placeholder="Usuario"\n        oninvalid="setCustomValidity(\'Por favor ingresa tu nombre de usuario\')"\n        onchange="try{setCustomValidity(\'\')}catch(e){}" title="Por favor ingresa tu nombre de usuario" type="usuario"\n        maxlength="60"></ion-input>\n    </ion-item>  \n\n    <p [hidden]="username.valid  || submitted==false " color="danger" padding-left></p>\n\n <br>\n    <ion-item clearInput class="item-md">\n      <ion-icon class="icono" name="key" subtle large item-left></ion-icon>\n      <ion-input required spellcheck="false" type="password" [(ngModel)]="login.password" name="password" placeholder="Contraseña" required\n        #password="ngModel" spellcheck="false" oninvalid="setCustomValidity(\'Por favor ingresa tu contraseña\')"\n        onchange="try{setCustomValidity(\'\')}catch(e){}"></ion-input>\n    </ion-item>\n\n    <p [hidden]="password.valid  || submitted==false " color="danger" padding-left></p>\n\n    <div padding></div>\n\n    <!--Boton Login-->\n    <div class="continuar">\n      <button ion-button round block shape="round" color="agro2" type="submit" (click)="loginUser(loginForm)">\n          Iniciar Sesión\n        <ion-icon name="log-in" subtle large item-left></ion-icon>\n      </button>\n    </div>\n\n  </form>\n  <br>\n\n\n\n  <div padding class="continuar" style="text-align: -webkit-center;">\n    <p style="text-align: center; color: #505A53; margin-top: -14px;">¿Quieres ser nuestro <strong>Cliente</strong>? <br> envianos un correo</p>\n    <button style="width: 40%;" ion-button round block shape="round" color="agro1" (click)="mensaje()">\n        Solicitar\n      <ion-icon name="log-in" subtle large item-left></ion-icon>\n    </button>\n\n  </div>\n\n  <p style="text-align: center; color: #4A6D68;">v 1.1.4</p>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_LoginServices__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuadministradorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuadministradorPage = (function () {
    function MenuadministradorPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    MenuadministradorPage.prototype.productos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["o" /* ProductosPage */]);
    };
    MenuadministradorPage.prototype.promociones = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["w" /* PromocionesadminPage */]);
    };
    MenuadministradorPage.prototype.usuarios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["B" /* UsuarioslistaPage */]);
    };
    MenuadministradorPage.prototype.productosofline = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "¡ATENCION!",
            message: "Para ver la lista de productos ofline, primero carga la lista de productos con Wifi",
            buttons: [
                {
                    text: "VOLVER",
                    role: "cancel",
                    handler: function () { }
                },
                {
                    text: "YA LO HICE",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["t" /* ProductosoflinePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    //CERRAR SESION
    MenuadministradorPage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "¡ATENCION!",
            message: "¿Estas seguro que quieres cerrar sesión?",
            buttons: [
                {
                    text: "NO",
                    handler: function () { }
                },
                {
                    text: "SI",
                    handler: function () {
                        window.localStorage.removeItem("dataUser");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["d" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    MenuadministradorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuadministradorPage');
    };
    MenuadministradorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuadministrador',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menuadministrador\menuadministrador.html"*/`\n<ion-content padding>\n\n  <ion-fab right top>\n    <button ion-fab ><ion-icon name="arrow-dropdown"></ion-icon></button>\n    <ion-fab-list side="bottom">\n        <img ion-fab style="border-radius: 50%;" (click)="usuarios()"  src="img/icon/users.png"/>\n    </ion-fab-list>\n    <ion-fab-list side="top">\n      <p style="color: #505A53; padding: 0px 0px;">Usuarios</p>\n    </ion-fab-list>\n  </ion-fab>\n\n  <br>\n  <br>\n  \n  <ion-grid style="text-align: center;"> \n    <ion-row> \n      <ion-col> \n        <div style="text-align: center;">\n          <img src="img/logo.png" style="width: 60%;">\n            <p style="padding: 0 0px; font-size: 12px; color: #505A53; margin-top: 1%; margin-right: 0%;">Bienvenid@ <br> \n            <strong style="font-size: 16px; color: #88BD54;">{{perfil.nombreUsuario}}</strong> <br> \n            <strong style="font-size: 14px; color: #505A53;">Administrador</strong> </p>\n        </div> \n      </ion-col>\n    </ion-row> \n  </ion-grid> \n\n  <div class="redes">\n    <ion-grid style="text-align: center; margin-top: 0%;">\n      <ion-row>\n        <ion-col>\n          <img src="img/facebookk.png"\n            onclick="window.open(\'https://www.facebook.com/agrovegusa\',\'_system\',\'location=yes\')">\n        </ion-col>\n        <ion-col>\n          <img src="img/instagram.png"\n            onclick="window.open(\'https://www.instagram.com/agrovegusa/?hl=en\',\'_system\',\'location=yes\')">\n        </ion-col>\n        <ion-col>\n          <img src="img/youtube.png"\n            onclick="window.open(\'https://www.youtube.com/channel/UCoMSuFK4yxFvm6I48F2fCjw\',\'_system\',\'location=yes\')">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta" (click)="productos()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/bolsaP.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Productos W</strong></p>     \n          </ion-card>\n        </ion-col> \n        <ion-col>     \n          <ion-card class="tarjeta" (click)="productosofline()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;"> \n                <img src="img/icon/bolsaO.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Productos O</strong></p>    \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  \n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta" onclick="window.open(\'https://agrovegusa.com/\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/web.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Sitio web</strong></p>     \n          </ion-card>\n        </ion-col> \n        <ion-col>     \n          <ion-card class="tarjeta" (click)="promociones()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/promociones.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Promociones</strong></p>     \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  \n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta" onclick="window.open(\'http://agrovegusa.sytes.net/saimovil/DefaultP.aspx\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/proveedor.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Proveedor</strong></p>      \n          </ion-card>\n        </ion-col> \n        <ion-col>     \n          <ion-card class="tarjeta" onclick="window.open(\'http://agrovegusa.sytes.net/saimovil/DefaultE.aspx\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/distribuidor.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Distribuidor</strong></p>     \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  <div style="text-align: center;" (click)="logout()">\n    <p style="font-size: 16px; color: #FF0000;">Cerrar sesión <img style="width: 4%;" (click)="logout()" src="img/icon/salir.png"/></p>\n  </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menuadministrador\menuadministrador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MenuadministradorPage);
    return MenuadministradorPage;
}());

//# sourceMappingURL=menuadministrador.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductosPage = (function () {
    function ProductosPage(navCtrl, navParams, loadingCtrl, viewCtrl, ProductoService, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.productos = [];
        this.productosLista = [];
        this.ProductoService = ProductoService;
        this.listar_productos();
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    ProductosPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProductosPage.prototype.listar_productos = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Cargando todos los productos, espere...",
        });
        this.loading.present();
        this.ProductoService.listar_productos().subscribe(function (data) {
            console.log(data);
            _this.productos = data;
            _this.productosLista = _this.productos;
            if (data.length != 0) {
                _this.loading.dismiss();
                console.log('Tienes productos agregados');
                window.localStorage.setItem("productos", JSON.stringify(data));
                // this.navCtrl.push(SlidePage);
            }
            if (data.length === 0) {
                _this.loading.dismiss();
                console.log('No hay productos agregados');
                //this.navCtrl.push(BienvenidaPage);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
            //() =>  console.log('cargar equipos complete')
        });
    };
    ProductosPage.prototype.detalles = function (event, item) {
        window.localStorage.setItem('datosProducto', JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["r" /* ProductosdetallesPage */]);
    };
    ProductosPage.prototype.enlace_agregar_producto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["q" /* ProductosagregarPage */]);
    };
    ProductosPage.prototype.enlace_producto_agotado = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["p" /* ProductosagotadosPage */]);
    };
    // PARA ACTUALIZAR LOS DATOS
    ProductosPage.prototype.Refrescar = function (refresher) {
        console.log('Comienzo de la operación asincrónica', refresher);
        this.listar_productos();
        setTimeout(function () {
            console.log('La operación asincrónica ha finalizado');
            refresher.complete();
        }, 2000);
    };
    // BARRA DE BUSCADOR
    ProductosPage.prototype.marca = function (ev) {
        this.productos = this.productosLista;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.productos = this.productos.filter(function (item) {
                return (item.marca.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    ProductosPage.prototype.producto = function (ev) {
        this.productos = this.productosLista;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.productos = this.productos.filter(function (item) {
                return (item.producto.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    ProductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosPage');
    };
    ProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productos',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productos\productos.html"*/`\n<ion-header translucent="true" no-border no-lines>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Productos</ion-title>\n      <!--\n<br>\n    <ion-grid style="text-align: center;">\n      <ion-row> \n      \n        <ion-col>\n          <img style="width: 25%;" (click)="enlace_producto_agotado()" src="img/icon/agotado.png"/>\n          <p style="font-size: 14px; color: #0C369C; margin-top: 0%;">Productos agotados</p>\n        </ion-col>\n       \n        <ion-col>     \n          <img style="width: 12%;" (click)="enlace_agregar_producto()" src="img/icon/agregarP.png"/>\n          <p style="font-size: 14px; color: #0C369C; margin-top: 0%;">Nuevo producto</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  -->\n  </ion-navbar>\n\n  <ion-item no-lines>\n    <ion-searchbar padding cancelButtonText (ionInput)="marca($event)" placeholder="Buscar por marca">\n    </ion-searchbar>\n    <ion-searchbar style="margin-top: -15px;" padding cancelButtonText (ionInput)="producto($event)" placeholder="Buscar por producto">\n    </ion-searchbar>\n  </ion-item>\n\n  <ion-fab right top>\n    <button ion-fab ><ion-icon name="pricetag"></ion-icon></button>\n    <ion-fab-list side="bottom">\n      <img ion-fab style="border-radius: 50%;" src="img/icon/agregarP.png" (click)="enlace_agregar_producto()" />\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <p style="color: #0C369C;">Nuevo producto</p>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="Refrescar($event)">\n    <ion-refresher-content \n    refreshingSpinner="circles"\n    refreshingText="Actualizando productos...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list *ngFor="let item of productos; let i=index;">\n    <ion-card class="lista" (click)="detalles($event,item)">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/product.png"/>      \n        </ion-avatar>\n        <h2 style="color: #4A6D68; font-size: 13px; margin-top: 5px;"><strong>{{item.producto}}</strong></h2> \n        <h3 style="color: #505A53;">Codigo KPI: <strong>{{item.codigoKPI}}</strong></h3>\n      </ion-item>\n      <ion-grid style="text-align: center;">\n        <ion-row> \n          <ion-col>\n            <ion-chip *ngIf="item.existencias === \'0\' " color="rojo">\n              <ion-label style="margin: 0 10px;">Agotado</ion-label>\n            </ion-chip>\n            <ion-chip *ngIf="item.existencias >= \'1\'" color="btnlogin">\n              <ion-label style="margin: 0 10px;">En existencia</ion-label>\n            </ion-chip>\n          </ion-col> \n          <ion-col>     \n            <h3 style="color: #505A53;">Marca: <br> <strong style="color: #88BD54;">{{item.marca}}</strong></h3>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productos\productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProductosPage);
    return ProductosPage;
}());

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosdetallesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductosdetallesPage = (function () {
    function ProductosdetallesPage(navCtrl, navParams, loadingCtrl, ProductoService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
        this.ProductoService = ProductoService;
        this.BDProducto = window.localStorage.getItem('datosProducto');
        this.datosP = JSON.parse(this.BDProducto);
        console.log(this.datosP);
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    ProductosdetallesPage.prototype.enlace_editar_producto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["s" /* ProductoseditarPage */]);
    };
    //ELIMINAR PRODUCTO
    ProductosdetallesPage.prototype.eliminar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.datosP.idProducto);
            var loading_1 = this.loadingCtrl.create({
                content: "Eliminando producto, espere...",
            });
            loading_1.present();
            this.ProductoService.eliminar_producto(this.datosP.idProducto).subscribe(function (data) {
                _this.userData = data;
                console.log(data);
                loading_1.dismiss();
                if (_this.userData.estatus === "OK") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "¡EXITO!",
                        subTitle: "Tu producto fue eliminado correctamente",
                        buttons: [
                            {
                                text: 'DE ACUERDO',
                                handler: function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["o" /* ProductosPage */]);
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                if (_this.userData.estatus === "ERROR") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "¡ERROR!",
                        subTitle: "No se pudo eliminar tu producto, intentalo nuevamente",
                        buttons: ["DE ACUERDO"]
                    });
                    alert_2.present();
                }
            }, function (err) {
                //console.log(err);
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "¡ERROR DE CONEXION!",
                    subTitle: "Ocurrio un problema para realizar la operación, intentalo mas tarde",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
            });
        }
    };
    ProductosdetallesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosdetallesPage');
    };
    ProductosdetallesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productosdetalles',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productosdetalles\productosdetalles.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Detalles del producto</ion-title>\n<br>\n    <ion-grid style="text-align: center;">\n      <ion-row> \n        <ion-col>\n          <img style="width: 25%;" (click)="enlace_editar_producto()" src="img/icon/editar.png"/>\n          <p style="font-size: 14px; color: #0C369C; margin-top: 0%;">Editar</p>\n        </ion-col>\n        <ion-col> \n          <form #eliminarForm="ngForm">    \n            <img style="width: 25%;" (click)="eliminar(eliminarForm)" src="img/icon/basura.png"/>\n            <p style="font-size: 14px; color: #C10000; margin-top: 0%;">Eliminar</p>\n          </form>     \n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item no-lines style="text-align: center;">\n    <h2 style="color: #4A6D68; font-size: 15px;"><strong>{{datosP.producto}}</strong></h2> \n        <h3 style="color: #505A53;">Marca: <strong style="color: #0C369C;">{{datosP.marca}}</strong></h3>\n        <h3 style="color: #505A53;">Existencias: <strong style="color: #88BD54;">{{datosP.existencias}}</strong></h3>\n        <h4 style="opacity: 50%;">Codigo KPI: <strong>{{datosP.codigoKPI}}</strong></h4>\n  </ion-item>\n\n\n    <ion-grid style="text-align: -webkit-center;">\n      <ion-row> \n        <ion-col> \n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Publico</p>\n                <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pClientePublico}}</strong></p>\n              </div> \n            </ion-item>\n        </ion-col>\n        <ion-col> \n          <ion-item no-lines>\n            <div style="text-align: -webkit-center;">\n              <p style="font-size: 10px; color: #505A53;">Mayorista</p>\n              <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pClienteMayorista}}</strong></p>\n            </div> \n          </ion-item>\n      </ion-col>\n      </ion-row>\n    </ion-grid> \n\n    <ion-grid style="text-align: -webkit-center; margin-top: -30px;">\n      <ion-row> \n        <ion-col> \n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Condición</p>\n                <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pAdminCondicion}}</strong></p>\n              </div> \n            </ion-item>\n        </ion-col>\n        <ion-col> \n          <ion-item no-lines>\n            <div style="text-align: -webkit-center;">\n              <p style="font-size: 10px; color: #505A53;">Deluxxe</p>\n              <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pAdminDeluxe}}</strong></p>\n            </div> \n          </ion-item>\n      </ion-col>\n      </ion-row>\n    </ion-grid> \n\n    <ion-grid style="text-align: -webkit-center; margin-top: -30px;">\n      <ion-row> \n        <ion-col> \n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Distribuidor</p>\n                <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pVendedorDistribuidor}}</strong></p>\n              </div> \n            </ion-item>\n        </ion-col>\n        <ion-col> \n          <ion-item no-lines>\n            <div style="text-align: -webkit-center;">\n              <p style="font-size: 10px; color: #505A53;">Descuento distribuidor</p>\n              <p style="font-size: 15px; color: #0C369C;"><strong>{{datosP.pVendedorDTODistribuidor}} %</strong></p>\n            </div> \n          </ion-item>\n      </ion-col>\n      </ion-row>\n    </ion-grid> \n\n\n\n  <div class="c2">\n    <ion-grid style="text-align: -webkit-center;">\n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 1</p>\n                <p style="font-size: 14px; color: #0C369C;">$ <strong>{{datosP.ventaV1Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 2</p>\n                <p style="font-size: 14px; color: #0C369C;">$ <strong>{{datosP.ventaV2Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n    <ion-grid style="text-align: -webkit-center;">\n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 3</p>\n                <p style="font-size: 14px; color: #0C369C;">$ <strong>{{datosP.ventaV3Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 4</p>\n                <p style="font-size: 14px; color: #0C369C;">$ <strong>{{datosP.ventaV4Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  <div class="c2">\n    <ion-grid style="text-align: -webkit-center;">\n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta2">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">IEPS</p>\n                <p style="font-size: 15px; color: #0C369C;"><strong>{{datosP.porceniepsCliente}} %</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta2">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">IVA</p>\n                <p style="font-size: 15px; color: #0C369C;"><strong>{{datosP.porcenivaCliente}} %</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productosdetalles\productosdetalles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProductosdetallesPage);
    return ProductosdetallesPage;
}());

//# sourceMappingURL=productosdetalles.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosagregarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductosagregarPage = (function () {
    function ProductosagregarPage(navCtrl, navParams, ProductoService, loadingCtrl, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.datosProducto = {};
        this.submitted = false;
        this.disableSubmit = false;
        this.ProductoService = ProductoService;
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    //GUARDAR CLIENTE
    ProductosagregarPage.prototype.guardar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.datosProducto.marca);
            console.log(this.datosProducto.codigoKPI);
            console.log(this.datosProducto.producto);
            console.log(this.datosProducto.pClientePublico);
            console.log(this.datosProducto.pAdminCondicion);
            console.log(this.datosProducto.pVendedorDTODistribuidor);
            console.log(this.datosProducto.pClienteMayorista);
            console.log(this.datosProducto.pVendedorDistribuidor);
            console.log(this.datosProducto.ventaV1Vendedor);
            console.log(this.datosProducto.ventaV2Vendedor);
            console.log(this.datosProducto.ventaV3Vendedor);
            console.log(this.datosProducto.ventaV4Vendedor);
            console.log(this.datosProducto.pAdminDeluxe);
            console.log(this.datosProducto.porceniepsCliente);
            console.log(this.datosProducto.porcenivaCliente);
            console.log(this.datosProducto.existencias);
            var loading_1 = this.loadingCtrl.create({
                content: "Guardando producto, espere...",
            });
            loading_1.present();
            this.ProductoService.agregar_producto(this.datosProducto.marca, this.datosProducto.codigoKPI, this.datosProducto.producto, this.datosProducto.pClientePublico, this.datosProducto.pAdminCondicion, this.datosProducto.pVendedorDTODistribuidor, this.datosProducto.pClienteMayorista, this.datosProducto.pVendedorDistribuidor, this.datosProducto.ventaV1Vendedor, this.datosProducto.ventaV2Vendedor, this.datosProducto.ventaV3Vendedor, this.datosProducto.ventaV4Vendedor, this.datosProducto.pAdminDeluxe, this.datosProducto.porceniepsCliente, this.datosProducto.porcenivaCliente, this.datosProducto.existencias).subscribe(function (data) {
                _this.userData = data;
                console.log(data);
                loading_1.dismiss();
                if (_this.userData.estatus === "OK") {
                    //console.log('Usuario registrado');
                    var alert_1 = _this.alertCtrl.create({
                        title: "¡EXITO!",
                        subTitle: "Tu producto fue registrado correctamente",
                        buttons: [
                            {
                                text: 'DE ACUERDO',
                                handler: function () {
                                    _this.dismiss();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                if (_this.userData.estatus === "ERROR") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "¡ERROR!",
                        subTitle: "No se pudo guardar tu producto, intentalo nuevamente",
                        buttons: ["DE ACUERDO"]
                    });
                    alert_2.present();
                }
            }, function (err) {
                //console.log(err);
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "¡ERROR DE CONEXION!",
                    subTitle: "Ocurrio un problema para realizar la operación, intentalo más tarde..",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
            });
        }
    };
    ProductosagregarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProductosagregarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosagregarPage');
    };
    ProductosagregarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productosagregar',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productosagregar\productosagregar.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Agregar producto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n \n  <form #guardarForm="ngForm">\n\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/marca.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Marca* :</ion-label>\n        <ion-input type="text" [(ngModel)]="datosProducto.marca" name="marca" #marca="ngModel" placeholder="marca del producto" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/product.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Producto* :</ion-label>\n        <ion-input type="text" [(ngModel)]="datosProducto.producto" name="producto" #producto="ngModel" placeholder="nombre producto" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/codigo.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Codigo KPI* :</ion-label>\n        <ion-input type="text" [(ngModel)]="datosProducto.codigoKPI" name="codigoKPI" #codigoKPI="ngModel" placeholder="codigo KPI" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/existencias.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Existencias* :</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.existencias" name="existencias" #existencias="ngModel" placeholder="existencias" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/clipu.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio al publico* $:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.pClientePublico" name="pClientePublico" #pClientePublico="ngModel" placeholder="publico" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/clipu.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio al cliente mayorista* $:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.pClienteMayorista" name="pClienteMayorista" #pClienteMayorista="ngModel" placeholder="cliente mayorista" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/admin.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio al administrador, condicion* $:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.pAdminCondicion" name="pAdminCondicion" #pAdminCondicion="ngModel" placeholder="admin, condicion" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/admin.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio al administrador, deluxe* $:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.pAdminDeluxe" name="pAdminDeluxe" #pAdminDeluxe="ngModel" placeholder="admin, deluxe" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/distri.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio al vendedor, distribuidor* $:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.pVendedorDistribuidor" name="pVendedorDistribuidor" #pVendedorDistribuidor="ngModel" placeholder="vendedor, distribuidor" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/porc.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">DTO al vendedor, distribuidor* %:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.pVendedorDTODistribuidor" name="pVendedorDTODistribuidor" #pVendedorDTODistribuidor="ngModel" placeholder="DTO, vendedor, distribuidor" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/volumen.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio de venta, V1* $:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.ventaV1Vendedor" name="ventaV1Vendedor" #ventaV1Vendedor="ngModel" placeholder="venta V1" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/volumen.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio de venta, V2* $:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.ventaV2Vendedor" name="ventaV2Vendedor" #ventaV2Vendedor="ngModel" placeholder="venta V2" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/volumen.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio de venta, V3* $:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.ventaV3Vendedor" name="ventaV3Vendedor" #ventaV3Vendedor="ngModel" placeholder="venta V3" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/volumen.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio de venta, V4* $:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.ventaV4Vendedor" name="ventaV4Vendedor" #ventaV4Vendedor="ngModel" placeholder="venta V4" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/porc.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Porcentaje IEPS* %:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.porceniepsCliente" name="porceniepsCliente" #porceniepsCliente="ngModel" placeholder="ieps" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/porc.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Porcentaje IVA* %:</ion-label>\n        <ion-input type="number" [(ngModel)]="datosProducto.porcenivaCliente" name="porcenivaCliente" #porcenivaCliente="ngModel" placeholder="iva" \n         required></ion-input>\n      </ion-item>\n    </ion-list>\n<br>\n    <button ion-button round block color="agro1" type="submit" (click)="guardar(guardarForm)">Guardar</button>\n\n    </form>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productosagregar\productosagregar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ProductosagregarPage);
    return ProductosagregarPage;
}());

//# sourceMappingURL=productosagregar.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoseditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductoseditarPage = (function () {
    function ProductoseditarPage(navCtrl, navParams, ProductoService, loadingCtrl, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.editarProducto = {};
        this.submitted = false;
        this.disableSubmit = false;
        this.ProductoService = ProductoService;
        this.BDProducto = window.localStorage.getItem('datosProducto');
        this.datosP = JSON.parse(this.BDProducto);
        console.log(this.datosP);
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
        this.editarProducto.marca = this.datosP.marca;
        this.editarProducto.codigoKPI = this.datosP.codigoKPI;
        this.editarProducto.producto = this.datosP.producto;
        this.editarProducto.pClientePublico = this.datosP.pClientePublico;
        this.editarProducto.pAdminCondicion = this.datosP.pAdminCondicion;
        this.editarProducto.pVendedorDTODistribuidor = this.datosP.pVendedorDTODistribuidor;
        this.editarProducto.pClienteMayorista = this.datosP.pClienteMayorista;
        this.editarProducto.pVendedorDistribuidor = this.datosP.pVendedorDistribuidor;
        this.editarProducto.ventaV1Vendedor = this.datosP.ventaV1Vendedor;
        this.editarProducto.ventaV2Vendedor = this.datosP.ventaV2Vendedor;
        this.editarProducto.ventaV3Vendedor = this.datosP.ventaV3Vendedor;
        this.editarProducto.ventaV4Vendedor = this.datosP.ventaV4Vendedor;
        this.editarProducto.pAdminDeluxe = this.datosP.pAdminDeluxe;
        this.editarProducto.porceniepsCliente = this.datosP.porceniepsCliente;
        this.editarProducto.porcenivaCliente = this.datosP.porcenivaCliente;
        this.editarProducto.existencias = this.datosP.existencias;
    }
    ProductoseditarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    //EDITAR CLIENTE
    ProductoseditarPage.prototype.editar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.datosP.idProducto);
            console.log(this.editarProducto.marca);
            console.log(this.editarProducto.codigoKPI);
            console.log(this.editarProducto.producto);
            console.log(this.editarProducto.pClientePublico);
            console.log(this.editarProducto.pAdminCondicion);
            console.log(this.editarProducto.pVendedorDTODistribuidor);
            console.log(this.editarProducto.pClienteMayorista);
            console.log(this.editarProducto.pVendedorDistribuidor);
            console.log(this.editarProducto.ventaV1Vendedor);
            console.log(this.editarProducto.ventaV2Vendedor);
            console.log(this.editarProducto.ventaV3Vendedor);
            console.log(this.editarProducto.ventaV4Vendedor);
            console.log(this.editarProducto.pAdminDeluxe);
            console.log(this.editarProducto.porceniepsCliente);
            console.log(this.editarProducto.porcenivaCliente);
            console.log(this.editarProducto.existencias);
            var loading_1 = this.loadingCtrl.create({
                content: "Modificando producto, espere...",
            });
            loading_1.present();
            this.ProductoService.editar_producto(this.datosP.idProducto, this.editarProducto.marca, this.editarProducto.codigoKPI, this.editarProducto.producto, this.editarProducto.pClientePublico, this.editarProducto.pAdminCondicion, this.editarProducto.pVendedorDTODistribuidor, this.editarProducto.pClienteMayorista, this.editarProducto.pVendedorDistribuidor, this.editarProducto.ventaV1Vendedor, this.editarProducto.ventaV2Vendedor, this.editarProducto.ventaV3Vendedor, this.editarProducto.ventaV4Vendedor, this.editarProducto.pAdminDeluxe, this.editarProducto.porceniepsCliente, this.editarProducto.porcenivaCliente, this.editarProducto.existencias).subscribe(function (data) {
                _this.userData = data;
                console.log(data);
                loading_1.dismiss();
                if (_this.userData.estatus === "OK") {
                    //console.log('Usuario registrado');
                    var alert_1 = _this.alertCtrl.create({
                        title: "¡OPERACION EXITOSA!",
                        subTitle: "Datos modificados correctamente",
                        buttons: [
                            {
                                text: 'DE ACUERDO',
                                handler: function () {
                                    //this.navCtrl.setRoot(ProductosPage);
                                    _this.dismiss();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                if (_this.userData.estatus === "ERROR") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "¡ERROR!",
                        subTitle: "Datos no modificados, intentalo nuevamente",
                        buttons: ["DE ACUERDO"]
                    });
                    alert_2.present();
                }
            }, function (err) {
                console.log(err);
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "Error de conexión",
                    subTitle: "Ocurrio un problema para realizar la operación, intentalo más tarde",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
            });
        }
    };
    ProductoseditarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoseditarPage');
    };
    ProductoseditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productoseditar',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productoseditar\productoseditar.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Editar producto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form #editarForm="ngForm">\n\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/marca.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Marca:</ion-label>\n        <ion-input type="text" [(ngModel)]="editarProducto.marca" name="marca" #marca="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/product.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Producto:</ion-label>\n        <ion-input type="text" [(ngModel)]="editarProducto.producto" name="producto" #producto="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/codigo.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Codigo KPI:</ion-label>\n        <ion-input type="text" [(ngModel)]="editarProducto.codigoKPI" name="codigoKPI" #codigoKPI="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/existencias.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Existencias:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.existencias" name="existencias" #existencias="ngModel" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/clipu.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio al publico $:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.pClientePublico" name="pClientePublico" #pClientePublico="ngModel" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/clipu.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio al cliente mayorista $:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.pClienteMayorista" name="pClienteMayorista" #pClienteMayorista="ngModel" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/admin.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio al administrador, condicion $:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.pAdminCondicion" name="pAdminCondicion" #pAdminCondicion="ngModel" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/admin.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio al administrador, deluxe $:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.pAdminDeluxe" name="pAdminDeluxe" #pAdminDeluxe="ngModel" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/distri.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio al vendedor, distribuidor $:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.pVendedorDistribuidor" name="pVendedorDistribuidor" #pVendedorDistribuidor="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/porc.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">DTO al vendedor, distribuidor %:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.pVendedorDTODistribuidor" name="pVendedorDTODistribuidor" #pVendedorDTODistribuidor="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/volumen.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio de venta, V1 $:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.ventaV1Vendedor" name="ventaV1Vendedor" #ventaV1Vendedor="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/volumen.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio de venta, V2 $:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.ventaV2Vendedor" name="ventaV2Vendedor" #ventaV2Vendedor="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/volumen.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio de venta, V3 $:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.ventaV3Vendedor" name="ventaV3Vendedor" #ventaV3Vendedor="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/volumen.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Precio de venta, V4 $:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.ventaV4Vendedor" name="ventaV4Vendedor" #ventaV4Vendedor="ngModel" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/porc.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Porcentaje IEPS %:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.porceniepsCliente" name="porceniepsCliente" #porceniepsCliente="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/porc.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Porcentaje IVA %:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarProducto.porcenivaCliente" name="porcenivaCliente" #porcenivaCliente="ngModel" \n         required></ion-input>\n      </ion-item>\n    </ion-list>\n    <br>\n\n    <button ion-button round block color="agro2" type="submit" (click)="editar(editarForm)">Guardar cambios</button>\n\n  </form>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productoseditar\productoseditar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ProductoseditarPage);
    return ProductoseditarPage;
}());

//# sourceMappingURL=productoseditar.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcuerdoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AcuerdoPage = (function () {
    function AcuerdoPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    AcuerdoPage.prototype.menus = function () {
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        if (this.perfil.tipoCuenta == 1) {
            var alert_1 = this.alertCtrl.create({
                title: '¡Bienvenido!',
                subTitle: this.perfil.nombreUsuario,
                buttons: ['CONTINUAR']
            });
            alert_1.present();
            console.log(this.perfil);
            window.localStorage.setItem('datosCliente', JSON.stringify(this.perfil));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["e" /* MenuadministradorPage */]);
        }
        else if (this.perfil.tipoCuenta == 2) {
            var alert_2 = this.alertCtrl.create({
                title: '¡Bienvenido!',
                subTitle: this.perfil.nombreUsuario,
                buttons: ['CONTINUAR']
            });
            alert_2.present();
            console.log(this.perfil);
            window.localStorage.setItem('datosCliente', JSON.stringify(this.perfil));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["k" /* MenudistribuidorPage */]);
        }
        else if (this.perfil.tipoCuenta == 3) {
            var alert_3 = this.alertCtrl.create({
                title: '¡Bienvenido!',
                subTitle: this.perfil.nombreUsuario,
                buttons: ['CONTINUAR']
            });
            alert_3.present();
            console.log(this.perfil);
            window.localStorage.setItem('datosCliente', JSON.stringify(this.perfil));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["g" /* MenuclientePage */]);
        }
        else if (this.perfil.tipoCuenta == 4) {
            var alert_4 = this.alertCtrl.create({
                title: '¡Bienvenido!',
                subTitle: this.perfil.nombreUsuario,
                buttons: ['CONTINUAR']
            });
            alert_4.present();
            console.log(this.perfil);
            window.localStorage.setItem('datosCliente', JSON.stringify(this.perfil));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["f" /* MenuadministradoresPage */]);
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: '¡ERROR!',
                subTitle: 'Algo salio mal...',
                buttons: ['OK']
            });
            alert_5.present();
        }
    };
    AcuerdoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcuerdoPage');
    };
    AcuerdoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acuerdo',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\acuerdo\acuerdo.html"*/`\n\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header style="text-align: center; font-size: 2.5rem;">\n       <strong>Acuerdo</strong>\n    </ion-card-header>\n    <ion-card-header style="text-align: center;">\n      Usuario: <br><strong> {{perfil.nombreUsuario}}</strong>\n    </ion-card-header>\n    <ion-card-content style="text-align: justify;">\n      Este acuerdo de protección de datos, es para que usted se comprometa a tratar de forma confidencial, \n      toda la información necesaria, por la empresa <strong>Agrovegusa</strong>, a no divulgar, comunicar o ceder dicha información a terceros. \n      Así mismo, le informamos que al no cumplir este acuerdo, estaría violando nuestras políticas de confiabilidad de uso de datos.\n    </ion-card-content>\n\n    <div class="btn">\n      <button ion-button round block color="agro1" (click)="menus()" >Acepto el acuerdo</button>\n   </div>\n\n   <br>\n   <br>\n  </ion-card>\n\n  <br>\n\n  <div style="text-align: center;">\n    <img src="img/logo.png" style="width: 70%; margin-top: -5%;">\n  </div>\n\n \n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\acuerdo\acuerdo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AcuerdoPage);
    return AcuerdoPage;
}());

//# sourceMappingURL=acuerdo.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenudistribuidorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenudistribuidorPage = (function () {
    function MenudistribuidorPage(navCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    MenudistribuidorPage.prototype.promociones = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["v" /* PromocionesPage */]);
    };
    MenudistribuidorPage.prototype.productos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["n" /* MenudistribuidorproductoPage */]);
    };
    MenudistribuidorPage.prototype.productosofline = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "¡ATENCION!",
            message: "Para ver la lista de productos ofline, primero carga la lista de productos con Wifi",
            buttons: [
                {
                    text: "VOLVER",
                    role: "cancel",
                    handler: function () { }
                },
                {
                    text: "YA LO HICE",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["t" /* ProductosoflinePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    //CERRAR SESION
    MenudistribuidorPage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "¡ATENCION!",
            message: "¿Estas seguro que quieres cerrar sesión?",
            buttons: [
                {
                    text: "NO",
                    handler: function () { }
                },
                {
                    text: "SI",
                    handler: function () {
                        window.localStorage.removeItem("dataUser");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["d" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    MenudistribuidorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenudistribuidorPage');
    };
    MenudistribuidorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menudistribuidor',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menudistribuidor\menudistribuidor.html"*/`\n<ion-content padding>\n  <br>\n  <br>\n  \n  <ion-grid style="text-align: center;"> \n    <ion-row> \n      <ion-col> \n        <div style="text-align: center;">\n          <img src="img/logo.png" style="width: 60%;">\n            <p style="padding: 0 0px; font-size: 12px; color: #505A53; margin-top: 1%; margin-right: 0%;">Bienvenid@ <br> \n            <strong style="font-size: 16px; color: #88BD54;">{{perfil.nombreUsuario}}</strong> <br> \n            <strong style="font-size: 14px; color: #505A53;">Promotor</strong> </p>\n        </div> \n      </ion-col>\n    </ion-row> \n  </ion-grid> \n\n  <div class="redes">\n    <ion-grid style="text-align: center; margin-top: 0%;">\n      <ion-row>\n        <ion-col>\n          <img src="img/facebookk.png"\n            onclick="window.open(\'https://www.facebook.com/agrovegusa\',\'_system\',\'location=yes\')">\n        </ion-col>\n        <ion-col>\n          <img src="img/instagram.png"\n            onclick="window.open(\'https://www.instagram.com/agrovegusa/?hl=en\',\'_system\',\'location=yes\')">\n        </ion-col>\n        <ion-col>\n          <img src="img/youtube.png"\n            onclick="window.open(\'https://www.youtube.com/channel/UCoMSuFK4yxFvm6I48F2fCjw\',\'_system\',\'location=yes\')">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row> \n        <ion-col>     \n          <ion-card class="tarjeta" (click)="productos()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/bolsaP.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Productos W</strong></p>    \n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta" (click)="productosofline()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/bolsaO.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Productos O</strong></p>    \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  \n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row>\n        <ion-col> \n          <ion-card class="tarjeta" onclick="window.open(\'https://agrovegusa.com/\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/web.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Sitio web</strong></p>     \n          </ion-card>\n        </ion-col>  \n        <ion-col>     \n          <ion-card class="tarjeta" (click)="promociones()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/promociones.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Promociones</strong></p>     \n          </ion-card>\n        </ion-col>\n  \n      </ion-row>\n    </ion-grid> \n  </div>\n\n  \n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta" onclick="window.open(\'http://agrovegusa.sytes.net/saimovil/DefaultP.aspx\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/proveedor.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Proveedor</strong></p>      \n          </ion-card>\n        </ion-col> \n        <ion-col>     \n          <ion-card class="tarjeta" onclick="window.open(\'http://agrovegusa.sytes.net/saimovil/DefaultE.aspx\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/distribuidor.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Distribuidor</strong></p>     \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  <div style="text-align: center;" (click)="logout()">\n    <p style="font-size: 16px; color: #FF0000;">Cerrar sesión <img style="width: 4%;" (click)="logout()" src="img/icon/salir.png"/></p>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menudistribuidor\menudistribuidor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MenudistribuidorPage);
    return MenudistribuidorPage;
}());

//# sourceMappingURL=menudistribuidor.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuclientePage = (function () {
    function MenuclientePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    MenuclientePage.prototype.promociones = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["v" /* PromocionesPage */]);
    };
    MenuclientePage.prototype.productos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["j" /* MenuclienteproductoPage */]);
    };
    MenuclientePage.prototype.productosofline = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "¡ATENCION!",
            message: "Para ver la lista de productos ofline, primero carga la lista de productos con Wifi",
            buttons: [
                {
                    text: "VOLVER",
                    role: "cancel",
                    handler: function () { }
                },
                {
                    text: "YA LO HICE",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["t" /* ProductosoflinePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    //CERRAR SESION
    MenuclientePage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "¡ATENCION!",
            message: "¿Estas seguro que quieres cerrar sesión?",
            buttons: [
                {
                    text: "NO",
                    handler: function () { }
                },
                {
                    text: "SI",
                    handler: function () {
                        window.localStorage.removeItem("dataUser");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["d" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    MenuclientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuclientePage');
    };
    MenuclientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menucliente',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menucliente\menucliente.html"*/`<ion-content padding>\n  <br>\n  <br>\n  \n  <ion-grid style="text-align: center;"> \n    <ion-row> \n      <ion-col> \n        <div style="text-align: center;">\n          <img src="img/logo.png" style="width: 60%;">\n            <p style="padding: 0 0px; font-size: 12px; color: #505A53; margin-top: 5%; margin-right: 0%;">Bienvenid@ <br> \n            <strong style="font-size: 16px; color: #88BD54;">{{perfil.nombreUsuario}}</strong> <br> \n            <strong style="font-size: 14px; color: #505A53;">Cliente</strong> </p>\n        </div> \n      </ion-col>\n    </ion-row> \n  </ion-grid> \n\n  <div class="redes">\n    <ion-grid style="text-align: center; margin-top: 0%;">\n      <ion-row>\n        <ion-col>\n          <img src="img/facebookk.png"\n            onclick="window.open(\'https://www.facebook.com/agrovegusa\',\'_system\',\'location=yes\')">\n        </ion-col>\n        <ion-col>\n          <img src="img/instagram.png"\n            onclick="window.open(\'https://www.instagram.com/agrovegusa/?hl=en\',\'_system\',\'location=yes\')">\n        </ion-col>\n        <ion-col>\n          <img src="img/youtube.png"\n            onclick="window.open(\'https://www.youtube.com/channel/UCoMSuFK4yxFvm6I48F2fCjw\',\'_system\',\'location=yes\')">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row> \n        <ion-col>     \n          <ion-card class="tarjeta" (click)="promociones()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/promociones.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Promociones</strong></p>     \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row> \n        <ion-col>     \n          <ion-card class="tarjeta" (click)="productos()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/bolsaP.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Productos W</strong></p>    \n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta" (click)="productosofline()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/bolsaO.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Productos O</strong></p>     \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  \n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta" onclick="window.open(\'https://agrovegusa.com/\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/web.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Sitio web</strong></p>     \n          </ion-card>\n        </ion-col> \n        <ion-col>     \n          <ion-card class="tarjeta" onclick="window.open(\'http://agrovegusa.sytes.net/saimovil/DefaultE.aspx\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/distribuidor.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Distribuidor</strong></p>     \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>  \n  </div>\n\n\n  <div style="text-align: center;" (click)="logout()">\n    <p style="font-size: 16px; color: #FF0000;">Cerrar sesión <img style="width: 4%;" (click)="logout()" src="img/icon/salir.png"/></p>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menucliente\menucliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MenuclientePage);
    return MenuclientePage;
}());

//# sourceMappingURL=menucliente.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosagotadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductosagotadosPage = (function () {
    function ProductosagotadosPage(navCtrl, navParams, loadingCtrl, viewCtrl, ProductoService, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.productos = [];
        this.productosLista = [];
        this.ProductoService = ProductoService;
        this.lista_productos_agotados();
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    ProductosagotadosPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProductosagotadosPage.prototype.lista_productos_agotados = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Cargando productos agotados, espere...",
        });
        this.loading.present();
        this.ProductoService.lista_productos_agotados().subscribe(function (data) {
            console.log(data);
            _this.productos = data;
            _this.productosLista = _this.productos;
            if (data.length != 0) {
                _this.loading.dismiss();
                console.log('Tienes productos agregados');
                // this.navCtrl.push(SlidePage);
            }
            if (data.length === 0) {
                _this.loading.dismiss();
                console.log('No hay productos agregados');
                //this.navCtrl.push(BienvenidaPage);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
            //() =>  console.log('cargar equipos complete')
        });
    };
    ProductosagotadosPage.prototype.detalles = function (event, item) {
        window.localStorage.setItem('datosProducto', JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["r" /* ProductosdetallesPage */]);
    };
    // PARA ACTUALIZAR LOS DATOS
    ProductosagotadosPage.prototype.Refrescar = function (refresher) {
        console.log('Comienzo de la operación asincrónica', refresher);
        this.lista_productos_agotados();
        setTimeout(function () {
            console.log('La operación asincrónica ha finalizado');
            refresher.complete();
        }, 2000);
    };
    // BARRA DE BUSCADOR
    ProductosagotadosPage.prototype.getItems = function (ev) {
        this.productos = this.productosLista;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.productos = this.productos.filter(function (item) {
                return (item.marca.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    ProductosagotadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosagotadosPage');
    };
    ProductosagotadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productosagotados',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productosagotados\productosagotados.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Productos Agotados</ion-title>\n  </ion-navbar>\n\n  <ion-searchbar padding cancelButtonText (ionInput)="getItems($event)" placeholder="Buscar producto">\n  </ion-searchbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="Refrescar($event)">\n    <ion-refresher-content \n    refreshingSpinner="circles"\n    refreshingText="Actualizando lista...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list *ngFor="let item of productos; let i=index;">\n    <ion-card class="lista" (click)="detalles($event,item)">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/product.png"/>      \n        </ion-avatar>\n        <h2 style="color: #4A6D68; font-size: 13px;"><strong>{{item.producto}}</strong></h2> \n        <h3 style="color: #505A53;">Marca: <strong>{{item.marca}}</strong></h3>\n        <h3 style="color: #505A53;">Existencias: <strong style="color: #C10000;">{{item.existencias}}</strong></h3>\n        <h4 style="opacity: 50%;">Codigo KPI: <strong>{{item.codigoKPI}}</strong></h4>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productosagotados\productosagotados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProductosagotadosPage);
    return ProductosagotadosPage;
}());

//# sourceMappingURL=productosagotados.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioslistaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_UsuarioServices__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioslistaPage = (function () {
    function UsuarioslistaPage(navCtrl, navParams, UsuarioService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.usuarios = [];
        this.usuariosLista = [];
        this.UsuarioService = UsuarioService;
        this.listar_usuarios();
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    //LISTAR USUARIOS
    UsuarioslistaPage.prototype.listar_usuarios = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Cargando usuarios, espere...",
        });
        this.loading.present();
        this.UsuarioService.listar_usuarios().subscribe(function (data) {
            console.log(data);
            _this.usuarios = data;
            _this.usuariosLista = _this.usuarios;
            if (data.length != 0) {
                _this.loading.dismiss();
                console.log('Tienes usuarios agregados');
            }
            if (data.length === 0) {
                _this.loading.dismiss();
                console.log('No hay usuarios agregados');
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    // PARA ACTUALIZAR LOS DATOS
    UsuarioslistaPage.prototype.Refrescar = function (refresher) {
        console.log('Comienzo de la operación asincrónica', refresher);
        this.listar_usuarios();
        setTimeout(function () {
            console.log('La operación asincrónica ha finalizado');
            refresher.complete();
        }, 2000);
    };
    // BARRA DE BUSCADOR
    UsuarioslistaPage.prototype.getItems = function (ev) {
        this.usuarios = this.usuariosLista;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.usuarios = this.usuarios.filter(function (item) {
                return (item.nombreUsuario.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    UsuarioslistaPage.prototype.detalles = function (event, item) {
        window.localStorage.setItem('infoUsuario', JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["C" /* UsuariosmostrarPage */]);
    };
    UsuarioslistaPage.prototype.enlace_agregar_usuario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["z" /* UsuariosagregarPage */]);
    };
    UsuarioslistaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioslistaPage');
    };
    UsuarioslistaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuarioslista',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\usuarioslista\usuarioslista.html"*/`\n\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Usuarios</ion-title>\n<br>\n    <ion-grid style="text-align: center;">\n      <ion-row> \n        <!--\n        <ion-col>\n          <img style="width: 25%;" (click)="enlace_agregar_usuario()" src="img/icon/agotado.png"/>\n          <p style="font-size: 14px; color: #0C369C; margin-top: 0%;">Productos agotados</p>\n        </ion-col>\n        -->\n        <ion-col>     \n          <img style="width: 12%;" (click)="enlace_agregar_usuario()" src="img/icon/agregarP.png"/>\n          <p style="font-size: 14px; color: #0C369C; margin-top: 0%;">Nuevo usuario</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n \n  </ion-navbar>\n\n  <ion-searchbar padding cancelButtonText (ionInput)="getItems($event)" placeholder="Buscar por nombre">\n  </ion-searchbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="Refrescar($event)">\n    <ion-refresher-content \n        refreshingSpinner="circles"\n        refreshingText="Actualizando lista...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list *ngFor="let item of usuarios; let i=index;">\n    <ion-card class="lista" (click)="detalles($event,item)">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/user.png"/>      \n        </ion-avatar>\n        <h2 style="color: #4A6D68; font-size: 15px;"><strong>{{item.nombreUsuario}}</strong></h2> \n        <h3 style="color: #505A53;">Usuario: <strong>{{item.Username}}</strong></h3>\n        <h4 style="opacity: 50%;">Correo: <strong>{{item.Correo}}</strong></h4>\n      </ion-item>\n      <ion-grid style="text-align: center;">\n        <ion-row> \n          <ion-col>\n            <ion-chip *ngIf="item.tipoCuenta === \'1\' " color="agro1">\n              <ion-label style="margin: 0 10px;">Administrador</ion-label>\n            </ion-chip>\n            <ion-chip *ngIf="item.tipoCuenta === \'2\'" color="agro2">\n              <ion-label style="margin: 0 10px;">Promotor</ion-label>\n            </ion-chip>\n            <ion-chip *ngIf="item.tipoCuenta === \'3\'" color="btnlogin">\n              <ion-label style="margin: 0 10px;">Cliente</ion-label>\n            </ion-chip>\n            <ion-chip *ngIf="item.tipoCuenta === \'4\'" color="orange">\n              <ion-label style="margin: 0 10px;">Administradores</ion-label>\n            </ion-chip>\n          </ion-col> \n          <ion-col>     \n            <h3 style="color: #505A53;">Número de promotor <br> <strong style="color: #0C369C;">{{item.numeroPromotor}}</strong></h3>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\usuarioslista\usuarioslista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_UsuarioServices__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], UsuarioslistaPage);
    return UsuarioslistaPage;
}());

//# sourceMappingURL=usuarioslista.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosmostrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_UsuarioServices__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuariosmostrarPage = (function () {
    function UsuariosmostrarPage(navCtrl, navParams, UsuarioService, loadingCtrl, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.submitted = false;
        this.UsuarioService = UsuarioService;
        this.BDUsuario = window.localStorage.getItem('infoUsuario');
        this.datosU = JSON.parse(this.BDUsuario);
        console.log(this.datosU);
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    UsuariosmostrarPage.prototype.enlace_editar_producto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["A" /* UsuarioseditarPage */]);
    };
    //ELIMINAR USUARIO
    UsuariosmostrarPage.prototype.eliminar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.datosU.idUsuario);
            var loading_1 = this.loadingCtrl.create({
                content: "Eliminando usuario, espere...",
            });
            loading_1.present();
            this.UsuarioService.eliminar_usuario(this.datosU.idUsuario).subscribe(function (data) {
                _this.userData = data;
                console.log(data);
                loading_1.dismiss();
                if (_this.userData.estatus === "OK") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "¡EXITO!",
                        subTitle: "Tu usuario fue eliminado correctamente",
                        buttons: [
                            {
                                text: 'DE ACUERDO',
                                handler: function () {
                                    //this.navCtrl.setRoot(ClientesPage)
                                    _this.dismiss();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                if (_this.userData.estatus === "ERROR") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "¡ERROR!",
                        subTitle: "No se pudo eliminar tu usuario, intentalo nuevamente",
                        buttons: ["DE ACUERDO"]
                    });
                    alert_2.present();
                }
            }, function (err) {
                //console.log(err);
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "¡ERROR DE CONEXION!",
                    subTitle: "Ocurrio un problema para realizar la operación, intentalo mas tarde",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
            });
        }
    };
    UsuariosmostrarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UsuariosmostrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuariosmostrarPage');
    };
    UsuariosmostrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuariosmostrar',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\usuariosmostrar\usuariosmostrar.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Detalles del usuario</ion-title>\n<br>\n    <ion-grid style="text-align: center;">\n      <ion-row> \n        <ion-col>\n          <img style="width: 25%;" (click)="enlace_editar_producto()" src="img/icon/editar.png"/>\n          <p style="font-size: 14px; color: #0C369C; margin-top: 0%;">Editar</p>\n        </ion-col>\n        <ion-col> \n          <form #eliminarForm="ngForm">    \n            <img style="width: 25%;" (click)="eliminar(eliminarForm)" src="img/icon/basura.png"/>\n            <p style="font-size: 14px; color: #C10000; margin-top: 0%;">Eliminar</p>\n          </form>     \n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <br>\n  <br>\n\n  <ion-card-content style="text-align: -webkit-center;"> \n    <h3 style="color: #0C369C;"><strong>{{datosU.nombreUsuario}}</strong></h3>\n  </ion-card-content> \n  \n  <ion-item no-lines style="text-align: center;">\n        <h3 style="color: #505A53;">Usuario: <strong>{{datosU.Username}}</strong></h3>\n        <h3 style="color: #505A53;">Número de promotor: <strong style="color: #88BD54;">{{datosU.numeroPromotor}}</strong></h3>\n        <h4 style="opacity: 50%;">Correo: <strong>{{datosU.Correo}}</strong></h4>\n  </ion-item>\n\n  <div style="text-align: -webkit-center;">\n  <ion-chip *ngIf="datosU.tipoCuenta === \'1\' " color="agro1">\n    <ion-label style="margin: 0 10px;">Administrador</ion-label>\n  </ion-chip>\n  <ion-chip *ngIf="datosU.tipoCuenta === \'2\'" color="agro2">\n    <ion-label style="margin: 0 10px;">Promotor</ion-label>\n  </ion-chip>\n  <ion-chip *ngIf="datosU.tipoCuenta === \'3\'" color="btnlogin">\n    <ion-label style="margin: 0 10px;">Cliente</ion-label>\n  </ion-chip>\n  <ion-chip *ngIf="datosU.tipoCuenta === \'4\'" color="orange">\n    <ion-label style="margin: 0 10px;">Administradores</ion-label>\n  </ion-chip>\n</div>\n\n<br>\n\n  <ion-card-content> \n    <p style="font-size: 14px; color: #4A6D68;"><img style="width: 5%;" src="img/icon/ciudad.png"/> Municipio: <strong>{{datosU.municipio}}</strong></p>\n  </ion-card-content>\n\n  <ion-card-content> \n    <p style="font-size: 14px; color: #4A6D68;"><img style="width: 5%;" src="img/icon/estado.png"/> Estado: <strong>{{datosU.estado}}</strong></p>\n  </ion-card-content>\n   \n  <ion-card-content> \n    <p style="font-size: 14px; color: #4A6D68;"><img style="width: 5%;" src="img/icon/telefono.png"/> Telefono: <strong>{{datosU.telefono}}</strong></p>\n  </ion-card-content>\n  \n  <ion-card-content> \n    <p style="font-size: 14px; color: #4A6D68;"><img style="width: 5%;" src="img/icon/pass.png"/> Contraseña: <strong>{{datosU.Pass}}</strong></p>\n  </ion-card-content>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\usuariosmostrar\usuariosmostrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_UsuarioServices__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], UsuariosmostrarPage);
    return UsuariosmostrarPage;
}());

//# sourceMappingURL=usuariosmostrar.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosagregarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_UsuarioServices__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuariosagregarPage = (function () {
    function UsuariosagregarPage(navCtrl, navParams, UsuarioService, loadingCtrl, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.datosBDUsuario = {};
        this.submitted = false;
        this.disableSubmit = false;
        this.UsuarioService = UsuarioService;
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    //GUARDAR USUARIO
    UsuariosagregarPage.prototype.guardar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.datosBDUsuario.Username);
            console.log(this.datosBDUsuario.Pass);
            console.log(this.datosBDUsuario.nombreUsuario);
            console.log(this.datosBDUsuario.municipio);
            console.log(this.datosBDUsuario.estado);
            console.log(this.datosBDUsuario.telefono);
            console.log(this.datosBDUsuario.Correo);
            console.log(this.datosBDUsuario.numeroPromotor);
            console.log(this.datosBDUsuario.tipoCuenta);
            var loading_1 = this.loadingCtrl.create({
                content: "Guardando usuario espere...",
            });
            loading_1.present();
            this.UsuarioService.agregar_usuario(this.datosBDUsuario.Username, this.datosBDUsuario.Pass, this.datosBDUsuario.nombreUsuario, this.datosBDUsuario.municipio, this.datosBDUsuario.estado, this.datosBDUsuario.telefono, this.datosBDUsuario.Correo, this.datosBDUsuario.numeroPromotor, this.datosBDUsuario.tipoCuenta).subscribe(function (data) {
                _this.userData = data;
                console.log(data);
                loading_1.dismiss();
                if (_this.userData.estatus === "OK") {
                    //console.log('Usuario registrado');
                    var alert_1 = _this.alertCtrl.create({
                        title: "¡EXCELENTE!",
                        subTitle: "Tu usuario fue registrado correctamente",
                        buttons: [
                            {
                                text: 'DE ACUERDO',
                                handler: function () {
                                    _this.dismiss();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                if (_this.userData.estatus === "ERROR") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "¡ERROR!",
                        subTitle: "No se pudo registrar tu usuario, intentalo nuevamente",
                        buttons: ["DE ACUERDO"]
                    });
                    alert_2.present();
                }
            }, function (err) {
                //console.log(err);
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "¡ERROR DE CONEXION!",
                    subTitle: "Ocurrio un problema para realizar la operación, intentalo más tarde",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
            });
        }
    };
    UsuariosagregarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UsuariosagregarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuariosagregarPage');
    };
    UsuariosagregarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuariosagregar',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\usuariosagregar\usuariosagregar.html"*/`<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Agregar usuario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <form #guardarForm="ngForm">\n\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-left>\n         <img src="img/icon/user.png"/>      \n        </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Nombre de usuario* :</ion-label>\n        <ion-input type="text" [(ngModel)]="datosBDUsuario.Username" name="Username" #Username="ngModel" placeholder="usuario"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/pass.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Contraseña* :</ion-label>\n        <ion-input type="password" [(ngModel)]="datosBDUsuario.Pass" name="Pass" #Pass="ngModel" placeholder="**********"\n         required></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/usuarioN.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Nombre completo* :</ion-label>\n        <ion-input type="text" [(ngModel)]="datosBDUsuario.nombreUsuario" name="nombreUsuario" #nombreUsuario="ngModel" placeholder="nombre completo"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/ciudad.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Municipio* :</ion-label>\n        <ion-input type="text" [(ngModel)]="datosBDUsuario.municipio" name="municipio" #municipio="ngModel" placeholder="municipio"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/estado.png"/>      \n        </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Estado* :</ion-label>\n        <ion-select [(ngModel)]="datosBDUsuario.estado" name="estado" #estado="ngModel" placeholder="estado" cancelText="Cancelar" okText="Agregar" required> \n        <ion-option value="Aguascalientes">Aguascalientes</ion-option>\n        <ion-option value="Baja California">Baja California</ion-option>\n        <ion-option value="Baja California Sur">Baja California Sur</ion-option>\n        <ion-option value="Chihuahua">Chihuahua</ion-option>\n        <ion-option value="Chiapas">Chiapas</ion-option>\n        <ion-option value="Campeche">Campeche</ion-option>\n        <ion-option value="Ciudad de México">Ciudad de México</ion-option>\n        <ion-option value="Coahuila">Coahuila</ion-option>\n        <ion-option value="Colima">Colima</ion-option>\n        <ion-option value="Durango">Durango</ion-option>\n        <ion-option value="Guerrero">Guerrero</ion-option>\n        <ion-option value="Guanajuato">Guanajuato</ion-option>\n        <ion-option value="Hidalgo">Hidalgo</ion-option>\n        <ion-option value="Jalisco">Jalisco</ion-option>\n        <ion-option value="Michoacán">Michoacán</ion-option>\n        <ion-option value="Estado de México">Estado de México</ion-option>\n        <ion-option value="Morelos">Morelos</ion-option>\n        <ion-option value="Nayarit">Nayarit</ion-option>\n        <ion-option value="Nuevo León">Nuevo León</ion-option>\n        <ion-option value="Oaxaca">Oaxaca</ion-option>\n        <ion-option value="Puebla">Puebla</ion-option>\n        <ion-option value="Quintana Roo">Quintana Roo</ion-option>\n        <ion-option value="Queretaro">Queretaro</ion-option>\n        <ion-option value="Sinaloa">Sinaloa</ion-option>\n        <ion-option value="San Luis Potosi">San Luis Potosi</ion-option>\n        <ion-option value="Sonora">Sonora</ion-option>\n        <ion-option value="Tabasco">Tabasco</ion-option>\n        <ion-option value="Tlaxcala">Tlaxcala</ion-option>\n        <ion-option value="Tamaulipas">Tamaulipas</ion-option>\n        <ion-option value="Veracruz">Veracruz</ion-option>\n        <ion-option value="Yucatan">Yucatan</ion-option>\n        <ion-option value="Zacatecas">Zacatecas</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/telefono.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Telefono* :</ion-label>\n        <ion-input type="number" [(ngModel)]="datosBDUsuario.telefono" name="telefono" #telefono="ngModel" placeholder="+52 352-1234567"\n         required></ion-input>\n      </ion-item>\n      <ion-item> \n        <ion-avatar item-left>\n         <img src="img/icon/email.png"/>      \n        </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Correo* :</ion-label>\n        <ion-input type="text" [(ngModel)]="datosBDUsuario.Correo" name="Correo" #Correo="ngModel" placeholder="ejemplo@gmail.com"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/promotorN.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Número de promotor* :</ion-label>\n        <ion-input type="number" [(ngModel)]="datosBDUsuario.numeroPromotor" name="numeroPromotor" #numeroPromotor="ngModel" placeholder="0"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/cuenta.png"/>      \n        </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Tipo de cuenta* :</ion-label>\n        <ion-select [(ngModel)]="datosBDUsuario.tipoCuenta" name="tipoCuenta" #tipoCuenta="ngModel" placeholder="Tipo de cuenta" cancelText="Cancelar" okText="Agregar" required> \n        <ion-option value="1">Administrador</ion-option>\n        <ion-option value="2">Promotor</ion-option>\n        <ion-option value="3">Cliente</ion-option>\n        <ion-option value="4">Administradores</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n<br>\n\n<button ion-button round block color="agro1" type="submit" (click)="guardar(guardarForm)">Guardar</button>\n\n  </form>\n\n\n\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\usuariosagregar\usuariosagregar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_UsuarioServices__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], UsuariosagregarPage);
    return UsuariosagregarPage;
}());

//# sourceMappingURL=usuariosagregar.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioseditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_UsuarioServices__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioseditarPage = (function () {
    function UsuarioseditarPage(navCtrl, navParams, UsuarioService, loadingCtrl, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.editarBDUsuario = {};
        this.submitted = false;
        this.disableSubmit = false;
        this.UsuarioService = UsuarioService;
        this.BDUsuario = window.localStorage.getItem('infoUsuario');
        this.datosU = JSON.parse(this.BDUsuario);
        console.log(this.datosU);
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
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
    UsuarioseditarPage.prototype.editar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
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
            var loading_1 = this.loadingCtrl.create({
                content: "Guardando cambios,, espere...",
            });
            loading_1.present();
            this.UsuarioService.editar_usuario(this.datosU.idUsuario, this.editarBDUsuario.Username, this.editarBDUsuario.Pass, this.editarBDUsuario.nombreUsuario, this.editarBDUsuario.municipio, this.editarBDUsuario.estado, this.editarBDUsuario.telefono, this.editarBDUsuario.Correo, this.editarBDUsuario.numeroPromotor, this.editarBDUsuario.tipoCuenta).subscribe(function (data) {
                _this.userData = data;
                console.log(data);
                loading_1.dismiss();
                if (_this.userData.estatus === "OK") {
                    //console.log('Usuario registrado');
                    var alert_1 = _this.alertCtrl.create({
                        title: "¡OPERACION EXITOSA!",
                        subTitle: "Datos modificados correctamente",
                        buttons: [
                            {
                                text: 'DE ACUERDO',
                                handler: function () {
                                    //this.navCtrl.setRoot(ProductosPage);
                                    _this.dismiss();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                if (_this.userData.estatus === "ERROR") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "¡ERROR!",
                        subTitle: "Datos no modificados, intentalo nuevamente",
                        buttons: ["DE ACUERDO"]
                    });
                    alert_2.present();
                }
            }, function (err) {
                console.log(err);
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "Error de conexión",
                    subTitle: "Ocurrio un problema para realizar la operación, intentalo más tarde",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
            });
        }
    };
    UsuarioseditarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UsuarioseditarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioseditarPage');
    };
    UsuarioseditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuarioseditar',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\usuarioseditar\usuarioseditar.html"*/`<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Editar usuario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form #editarForm="ngForm">\n\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-left>\n         <img src="img/icon/user.png"/>      \n        </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Nombre de usuario:</ion-label>\n        <ion-input type="text" [(ngModel)]="editarBDUsuario.Username" name="Username" #Username="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/pass.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Contraseña:</ion-label>\n        <ion-input type="password" [(ngModel)]="editarBDUsuario.Pass" name="Pass" #Pass="ngModel"\n         required></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/usuarioN.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Nombre completo:</ion-label>\n        <ion-input type="text" [(ngModel)]="editarBDUsuario.nombreUsuario" name="nombreUsuario" #nombreUsuario="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/ciudad.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Municipio:</ion-label>\n        <ion-input type="text" [(ngModel)]="editarBDUsuario.municipio" name="municipio" #municipio="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/estado.png"/>      \n        </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Estado:</ion-label>\n        <ion-select [(ngModel)]="editarBDUsuario.estado" name="estado" #estado="ngModel" cancelText="Cancelar" okText="Agregar" required> \n        <ion-option value="Aguascalientes">Aguascalientes</ion-option>\n        <ion-option value="Baja California">Baja California</ion-option>\n        <ion-option value="Baja California Sur">Baja California Sur</ion-option>\n        <ion-option value="Chihuahua">Chihuahua</ion-option>\n        <ion-option value="Chiapas">Chiapas</ion-option>\n        <ion-option value="Campeche">Campeche</ion-option>\n        <ion-option value="Ciudad de México">Ciudad de México</ion-option>\n        <ion-option value="Coahuila">Coahuila</ion-option>\n        <ion-option value="Colima">Colima</ion-option>\n        <ion-option value="Durango">Durango</ion-option>\n        <ion-option value="Guerrero">Guerrero</ion-option>\n        <ion-option value="Guanajuato">Guanajuato</ion-option>\n        <ion-option value="Hidalgo">Hidalgo</ion-option>\n        <ion-option value="Jalisco">Jalisco</ion-option>\n        <ion-option value="Michoacán">Michoacán</ion-option>\n        <ion-option value="Estado de México">Estado de México</ion-option>\n        <ion-option value="Morelos">Morelos</ion-option>\n        <ion-option value="Nayarit">Nayarit</ion-option>\n        <ion-option value="Nuevo León">Nuevo León</ion-option>\n        <ion-option value="Oaxaca">Oaxaca</ion-option>\n        <ion-option value="Puebla">Puebla</ion-option>\n        <ion-option value="Quintana Roo">Quintana Roo</ion-option>\n        <ion-option value="Queretaro">Queretaro</ion-option>\n        <ion-option value="Sinaloa">Sinaloa</ion-option>\n        <ion-option value="San Luis Potosi">San Luis Potosi</ion-option>\n        <ion-option value="Sonora">Sonora</ion-option>\n        <ion-option value="Tabasco">Tabasco</ion-option>\n        <ion-option value="Tlaxcala">Tlaxcala</ion-option>\n        <ion-option value="Tamaulipas">Tamaulipas</ion-option>\n        <ion-option value="Veracruz">Veracruz</ion-option>\n        <ion-option value="Yucatan">Yucatan</ion-option>\n        <ion-option value="Zacatecas">Zacatecas</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/telefono.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Telefono:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarBDUsuario.telefono" name="telefono" #telefono="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item> \n        <ion-avatar item-left>\n         <img src="img/icon/email.png"/>      \n        </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Correo:</ion-label>\n        <ion-input type="text" [(ngModel)]="editarBDUsuario.Correo" name="Correo" #Correo="ngModel"\n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/promotorN.png"/>      \n         </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Número de promotor:</ion-label>\n        <ion-input type="number" [(ngModel)]="editarBDUsuario.numeroPromotor" name="numeroPromotor" #numeroPromotor="ngModel" \n         required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/cuenta.png"/>      \n        </ion-avatar>\n        <ion-label stacked style="font-size: 16px; color: #4A6D68;">Tipo de cuenta:</ion-label>\n        <ion-select [(ngModel)]="editarBDUsuario.tipoCuenta" name="tipoCuenta" #tipoCuenta="ngModel" cancelText="Cancelar" okText="Agregar" required> \n        <ion-option value="1">Administrador</ion-option>\n        <ion-option value="2">Promotor</ion-option>\n        <ion-option value="3">Cliente</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <br>\n\n    <button ion-button round block color="agro2" type="submit" (click)="editar(editarForm)">Guardar cambios</button>\n\n  </form>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\usuarioseditar\usuarioseditar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_UsuarioServices__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], UsuarioseditarPage);
    return UsuarioseditarPage;
}());

//# sourceMappingURL=usuarioseditar.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenudistribuidorproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenudistribuidorproductoPage = (function () {
    function MenudistribuidorproductoPage(navCtrl, navParams, loadingCtrl, viewCtrl, ProductoService, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.productos = [];
        this.productosLista = [];
        this.ProductoService = ProductoService;
        this.listar_productos();
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    MenudistribuidorproductoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MenudistribuidorproductoPage.prototype.listar_productos = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Cargando todos los productos, espere...",
        });
        this.loading.present();
        this.ProductoService.listar_productos().subscribe(function (data) {
            console.log(data);
            _this.productos = data;
            _this.productosLista = _this.productos;
            if (data.length != 0) {
                _this.loading.dismiss();
                console.log('Tienes productos agregados');
                window.localStorage.setItem("productos", JSON.stringify(data));
                // this.navCtrl.push(SlidePage);
            }
            if (data.length === 0) {
                _this.loading.dismiss();
                console.log('No hay productos agregados');
                //this.navCtrl.push(BienvenidaPage);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
            //() =>  console.log('cargar equipos complete')
        });
    };
    MenudistribuidorproductoPage.prototype.detalles = function (event, item) {
        window.localStorage.setItem('datosProducto', JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["m" /* MenudistribuidormostrarPage */]);
    };
    MenudistribuidorproductoPage.prototype.enlace_producto_agotado = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["l" /* MenudistribuidoragotadosPage */]);
    };
    // PARA ACTUALIZAR LOS DATOS
    MenudistribuidorproductoPage.prototype.Refrescar = function (refresher) {
        console.log('Comienzo de la operación asincrónica', refresher);
        this.listar_productos();
        setTimeout(function () {
            console.log('La operación asincrónica ha finalizado');
            refresher.complete();
        }, 2000);
    };
    // BARRA DE BUSCADOR
    MenudistribuidorproductoPage.prototype.marca = function (ev) {
        this.productos = this.productosLista;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.productos = this.productos.filter(function (item) {
                return (item.marca.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    MenudistribuidorproductoPage.prototype.producto = function (ev) {
        this.productos = this.productosLista;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.productos = this.productos.filter(function (item) {
                return (item.producto.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    MenudistribuidorproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenudistribuidorproductoPage');
    };
    MenudistribuidorproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menudistribuidorproducto',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menudistribuidorproducto\menudistribuidorproducto.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Productos</ion-title>\n    <!--<br>\n    <ion-grid style="text-align: center;">\n      <ion-row> \n        \n        <ion-col>     \n          <img style="width: 25%;" (click)="enlace_agregar_producto()" src="img/icon/agregarP.png"/>\n          <p style="font-size: 14px; color: #0C369C; margin-top: 0%;">Nuevo producto</p>\n        </ion-col>\n        \n        <ion-col>\n          <img style="width: 12%;" (click)="enlace_producto_agotado()" src="img/icon/agotado.png"/>\n          <p style="font-size: 14px; color: #0C369C; margin-top: 0%;">Productos agotados</p>\n        </ion-col>\n       \n      </ion-row>\n    </ion-grid> \n  -->\n\n  </ion-navbar>\n\n  <ion-item no-lines>\n    <ion-searchbar padding cancelButtonText (ionInput)="marca($event)" placeholder="Buscar por marca">\n    </ion-searchbar>\n    <ion-searchbar style="margin-top: -15px;" padding cancelButtonText (ionInput)="producto($event)" placeholder="Buscar por producto">\n    </ion-searchbar>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="Refrescar($event)">\n    <ion-refresher-content \n    refreshingSpinner="circles"\n    refreshingText="Actualizando productos...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list *ngFor="let item of productos; let i=index;">\n    <ion-card class="lista" (click)="detalles($event,item)">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/product.png"/>      \n        </ion-avatar>\n        <h2 style="color: #4A6D68; font-size: 13px; margin-top: 5px;"><strong>{{item.producto}}</strong></h2> \n        <h3 style="color: #505A53;">Codigo KPI: <strong>{{item.codigoKPI}}</strong></h3>\n      </ion-item>\n      <ion-grid style="text-align: center;">\n        <ion-row> \n          <ion-col>\n            <ion-chip *ngIf="item.existencias === \'0\' " color="rojo">\n              <ion-label style="margin: 0 10px;">Agotado</ion-label>\n            </ion-chip>\n            <ion-chip *ngIf="item.existencias >= \'1\'" color="btnlogin">\n              <ion-label style="margin: 0 10px;">En existencia</ion-label>\n            </ion-chip>\n          </ion-col> \n          <ion-col>     \n            <h3 style="color: #505A53;">Marca: <br> <strong style="color: #88BD54;">{{item.marca}}</strong></h3>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menudistribuidorproducto\menudistribuidorproducto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MenudistribuidorproductoPage);
    return MenudistribuidorproductoPage;
}());

//# sourceMappingURL=menudistribuidorproducto.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenudistribuidoragotadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenudistribuidoragotadosPage = (function () {
    function MenudistribuidoragotadosPage(navCtrl, navParams, loadingCtrl, viewCtrl, ProductoService, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.productos = [];
        this.productosLista = [];
        this.ProductoService = ProductoService;
        this.lista_productos_agotados();
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    MenudistribuidoragotadosPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MenudistribuidoragotadosPage.prototype.lista_productos_agotados = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Cargando productos agotados, espere...",
        });
        this.loading.present();
        this.ProductoService.lista_productos_agotados().subscribe(function (data) {
            console.log(data);
            _this.productos = data;
            _this.productosLista = _this.productos;
            if (data.length != 0) {
                _this.loading.dismiss();
                console.log('Tienes productos agregados');
                // this.navCtrl.push(SlidePage);
            }
            if (data.length === 0) {
                _this.loading.dismiss();
                console.log('No hay productos agregados');
                //this.navCtrl.push(BienvenidaPage);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
            //() =>  console.log('cargar equipos complete')
        });
    };
    MenudistribuidoragotadosPage.prototype.detalles = function (event, item) {
        window.localStorage.setItem('datosProducto', JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["m" /* MenudistribuidormostrarPage */]);
    };
    // PARA ACTUALIZAR LOS DATOS
    MenudistribuidoragotadosPage.prototype.Refrescar = function (refresher) {
        console.log('Comienzo de la operación asincrónica', refresher);
        this.lista_productos_agotados();
        setTimeout(function () {
            console.log('La operación asincrónica ha finalizado');
            refresher.complete();
        }, 2000);
    };
    // BARRA DE BUSCADOR
    MenudistribuidoragotadosPage.prototype.getItems = function (ev) {
        this.productos = this.productosLista;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.productos = this.productos.filter(function (item) {
                return (item.marca.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    MenudistribuidoragotadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenudistribuidoragotadosPage');
    };
    MenudistribuidoragotadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menudistribuidoragotados',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menudistribuidoragotados\menudistribuidoragotados.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Productos Agotados</ion-title>\n  </ion-navbar>\n\n  <ion-searchbar padding cancelButtonText (ionInput)="getItems($event)" placeholder="Buscar producto">\n  </ion-searchbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="Refrescar($event)">\n    <ion-refresher-content \n    refreshingSpinner="circles"\n    refreshingText="Actualizando lista...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list *ngFor="let item of productos; let i=index;">\n    <ion-card class="lista" (click)="detalles($event,item)">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/product.png"/>      \n        </ion-avatar>\n        <h2 style="color: #4A6D68; font-size: 13px;"><strong>{{item.producto}}</strong></h2> \n        <h3 style="color: #505A53;">Marca: <strong>{{item.marca}}</strong></h3>\n        <h3 style="color: #505A53;">Existencias: <strong style="color: #C10000;">{{item.existencias}}</strong></h3>\n        <h4 style="opacity: 50%;">Codigo KPI: <strong>{{item.codigoKPI}}</strong></h4>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menudistribuidoragotados\menudistribuidoragotados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MenudistribuidoragotadosPage);
    return MenudistribuidoragotadosPage;
}());

//# sourceMappingURL=menudistribuidoragotados.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenudistribuidormostrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenudistribuidormostrarPage = (function () {
    function MenudistribuidormostrarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.BDProducto = window.localStorage.getItem('datosProducto');
        this.datosP = JSON.parse(this.BDProducto);
        console.log(this.datosP);
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    MenudistribuidormostrarPage.prototype.pedido = function () {
    };
    MenudistribuidormostrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenudistribuidormostrarPage');
    };
    MenudistribuidormostrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menudistribuidormostrar',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menudistribuidormostrar\menudistribuidormostrar.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Detalles del producto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding> \n\n  <br>\n  \n  <ion-card-content style="text-align: -webkit-center;"> \n    <h3 style="color: #0C369C;"><strong>{{datosP.producto}}</strong></h3>\n  </ion-card-content> \n\n  <ion-item no-lines >\n    <h3 style="color: #505A53; font-size: 15px;"><ion-icon name="ribbon"></ion-icon> Marca del producto: <strong>{{datosP.marca}}</strong></h3>\n    <h3 style="color: #505A53; font-size: 15px;"><ion-icon name="list-box"></ion-icon> Existencias: <strong style="color: coral;">{{datosP.existencias}}</strong> <strong>pz/pzs</strong> en inventario</h3>\n    <h4 style="color: #505A53; font-size: 15px;"><ion-icon name="barcode"></ion-icon> Codigo KPI: <strong style="color: #3bb5a5;">{{datosP.codigoKPI}}</strong></h4>\n</ion-item>\n\n<div style="text-align: -webkit-center;">\n  <button ion-button round block color="agro1" type="submit" (click)="pedido()">\n    Hacer pedido <ion-icon name="cloud-upload"></ion-icon>\n  </button>\n</div> \n\n<br>\n\n    <ion-grid style="text-align: -webkit-center;">\n      <h3 style="margin: 0px 0px 0px; font-size: 16px; color: #505A53;"><ion-icon name="cube"></ion-icon> Precios</h3>\n      <ion-row> \n        <ion-col> \n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Publico</p>\n                <p style="font-size: 18px; color: darkturquoise;">$ <strong>{{datosP.pClientePublico}}</strong></p>\n              </div> \n            </ion-item>\n        </ion-col>\n        <ion-col> \n          <ion-item no-lines>\n            <div style="text-align: -webkit-center;">\n              <p style="font-size: 10px; color: #505A53;">Mayorista</p>\n              <p style="font-size: 18px; color: darkturquoise;">$ <strong>{{datosP.pClienteMayorista}}</strong></p>\n            </div> \n          </ion-item>\n      </ion-col>\n      <ion-col> \n        <ion-item no-lines>\n          <div style="text-align: -webkit-center;">\n            <p style="font-size: 10px; color: #505A53;">Distribuidor</p>\n            <p style="font-size: 18px; color: darkturquoise;">$ <strong>{{datosP.pVendedorDistribuidor}}</strong></p>\n          </div> \n        </ion-item>\n    </ion-col>\n      </ion-row>\n    </ion-grid> \n\n    <br>\n    <!--\n    <ion-grid style="text-align: -webkit-center; margin-top: -30px;">\n      <ion-row> \n        <ion-col> \n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Distribuidor</p>\n                <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pVendedorDistribuidor}}</strong></p>\n              </div> \n            </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n-->\n\n\n  <div class="c2">\n    <ion-grid style="text-align: -webkit-center;">\n      <h3 style="margin: 0px 0px 0px; font-size: 16px; color: #505A53;"> <ion-icon name="cube"></ion-icon> Volumenes</h3>\n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 1</p>\n                <p style="font-size: 20px; color: darkturquoise;">$ <strong>{{datosP.ventaV1Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 2</p>\n                <p style="font-size: 20px; color: darkturquoise;">$ <strong>{{datosP.ventaV2Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n    <ion-grid style="text-align: -webkit-center;">\n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 3</p>\n                <p style="font-size: 20px; color: darkturquoise;">$ <strong>{{datosP.ventaV3Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 4</p>\n                <p style="font-size: 20px; color: darkturquoise;">$ <strong>{{datosP.ventaV4Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  <br>\n \n    <ion-grid style="text-align: -webkit-center;">\n      <h3 style="margin: 0px 0px 0px; font-size: 16px; color: #505A53;"><ion-icon name="cube"></ion-icon> Porcentajes</h3>\n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta2">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">IEPS</p>\n                <p style="font-size: 20px; color: darkturquoise;"><strong>{{datosP.porceniepsCliente}} %</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta2">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">IVA</p>\n                <p style="font-size: 20px; color: darkturquoise;"><strong>{{datosP.porcenivaCliente}} %</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n\n\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menudistribuidormostrar\menudistribuidormostrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenudistribuidormostrarPage);
    return MenudistribuidormostrarPage;
}());

//# sourceMappingURL=menudistribuidormostrar.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuclienteproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuclienteproductoPage = (function () {
    function MenuclienteproductoPage(navCtrl, navParams, loadingCtrl, viewCtrl, ProductoService, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.productos = [];
        this.productosLista = [];
        this.ProductoService = ProductoService;
        this.listar_productos();
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    MenuclienteproductoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MenuclienteproductoPage.prototype.listar_productos = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Cargando todos los productos, espere...",
        });
        this.loading.present();
        this.ProductoService.listar_productos().subscribe(function (data) {
            console.log(data);
            _this.productos = data;
            _this.productosLista = _this.productos;
            if (data.length != 0) {
                _this.loading.dismiss();
                console.log('Tienes productos agregados');
                window.localStorage.setItem("productos", JSON.stringify(data));
                // this.navCtrl.push(SlidePage);
            }
            if (data.length === 0) {
                _this.loading.dismiss();
                console.log('No hay productos agregados');
                //this.navCtrl.push(BienvenidaPage);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
            //() =>  console.log('cargar equipos complete')
        });
    };
    MenuclienteproductoPage.prototype.detalles = function (event, item) {
        window.localStorage.setItem('datosProducto', JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["i" /* MenuclientemostrarPage */]);
    };
    MenuclienteproductoPage.prototype.enlace_producto_agotado = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["h" /* MenuclienteagotadosPage */]);
    };
    // PARA ACTUALIZAR LOS DATOS
    MenuclienteproductoPage.prototype.Refrescar = function (refresher) {
        console.log('Comienzo de la operación asincrónica', refresher);
        this.listar_productos();
        setTimeout(function () {
            console.log('La operación asincrónica ha finalizado');
            refresher.complete();
        }, 2000);
    };
    // BARRA DE BUSCADOR
    MenuclienteproductoPage.prototype.marca = function (ev) {
        this.productos = this.productosLista;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.productos = this.productos.filter(function (item) {
                return (item.marca.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    MenuclienteproductoPage.prototype.producto = function (ev) {
        this.productos = this.productosLista;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.productos = this.productos.filter(function (item) {
                return (item.producto.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    MenuclienteproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuclienteproductoPage');
    };
    MenuclienteproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuclienteproducto',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menuclienteproducto\menuclienteproducto.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Productos</ion-title>\n       <!--\n<br>\n    <ion-grid style="text-align: center;">\n      <ion-row> \n     \n        <ion-col>     \n          <img style="width: 25%;" (click)="enlace_agregar_producto()" src="img/icon/agregarP.png"/>\n          <p style="font-size: 14px; color: #0C369C; margin-top: 0%;">Nuevo producto</p>\n        </ion-col>\n        \n        <ion-col>\n          <img style="width: 12%;" (click)="enlace_producto_agotado()" src="img/icon/agotado.png"/>\n          <p style="font-size: 14px; color: #0C369C; margin-top: 0%;">Productos agotados</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n -->\n  </ion-navbar>\n\n  <ion-item no-lines>\n    <ion-searchbar padding cancelButtonText (ionInput)="marca($event)" placeholder="Buscar por marca">\n    </ion-searchbar>\n    <ion-searchbar style="margin-top: -15px;" padding cancelButtonText (ionInput)="producto($event)" placeholder="Buscar por producto">\n    </ion-searchbar>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="Refrescar($event)">\n    <ion-refresher-content \n    refreshingSpinner="circles"\n    refreshingText="Actualizando productos...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list *ngFor="let item of productos; let i=index;">\n    <ion-card class="lista" (click)="detalles($event,item)">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/product.png"/>      \n        </ion-avatar>\n        <h2 style="color: #4A6D68; font-size: 13px; margin-top: 5px;"><strong>{{item.producto}}</strong></h2> \n        <h3 style="color: #505A53;">Codigo KPI: <strong>{{item.codigoKPI}}</strong></h3>\n      </ion-item>\n      <ion-grid style="text-align: center;">\n        <ion-row> \n          <ion-col>\n            <ion-chip *ngIf="item.existencias === \'0\' " color="rojo">\n              <ion-label style="margin: 0 10px;">Agotado</ion-label>\n            </ion-chip>\n            <ion-chip *ngIf="item.existencias >= \'1\'" color="btnlogin">\n              <ion-label style="margin: 0 10px;">En existencia</ion-label>\n            </ion-chip>\n          </ion-col> \n          <ion-col>     \n            <h3 style="color: #505A53;">Marca: <br> <strong style="color: #88BD54;">{{item.marca}}</strong></h3>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n\n\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menuclienteproducto\menuclienteproducto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MenuclienteproductoPage);
    return MenuclienteproductoPage;
}());

//# sourceMappingURL=menuclienteproducto.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuclienteagotadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuclienteagotadosPage = (function () {
    function MenuclienteagotadosPage(navCtrl, navParams, loadingCtrl, viewCtrl, ProductoService, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.productos = [];
        this.productosLista = [];
        this.ProductoService = ProductoService;
        this.lista_productos_agotados();
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    MenuclienteagotadosPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MenuclienteagotadosPage.prototype.lista_productos_agotados = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Cargando productos agotados, espere...",
        });
        this.loading.present();
        this.ProductoService.lista_productos_agotados().subscribe(function (data) {
            console.log(data);
            _this.productos = data;
            _this.productosLista = _this.productos;
            if (data.length != 0) {
                _this.loading.dismiss();
                console.log('Tienes productos agregados');
                // this.navCtrl.push(SlidePage);
            }
            if (data.length === 0) {
                _this.loading.dismiss();
                console.log('No hay productos agregados');
                //this.navCtrl.push(BienvenidaPage);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
            //() =>  console.log('cargar equipos complete')
        });
    };
    MenuclienteagotadosPage.prototype.detalles = function (event, item) {
        window.localStorage.setItem('datosProducto', JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["i" /* MenuclientemostrarPage */]);
    };
    // PARA ACTUALIZAR LOS DATOS
    MenuclienteagotadosPage.prototype.Refrescar = function (refresher) {
        console.log('Comienzo de la operación asincrónica', refresher);
        this.lista_productos_agotados();
        setTimeout(function () {
            console.log('La operación asincrónica ha finalizado');
            refresher.complete();
        }, 2000);
    };
    // BARRA DE BUSCADOR
    MenuclienteagotadosPage.prototype.getItems = function (ev) {
        this.productos = this.productosLista;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.productos = this.productos.filter(function (item) {
                return (item.marca.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    MenuclienteagotadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuclienteagotadosPage');
    };
    MenuclienteagotadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuclienteagotados',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menuclienteagotados\menuclienteagotados.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Productos Agotados</ion-title>\n  </ion-navbar>\n\n  <ion-searchbar padding cancelButtonText (ionInput)="getItems($event)" placeholder="Buscar producto">\n  </ion-searchbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="Refrescar($event)">\n    <ion-refresher-content \n    refreshingSpinner="circles"\n    refreshingText="Actualizando lista...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list *ngFor="let item of productos; let i=index;">\n    <ion-card class="lista" (click)="detalles($event,item)">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/product.png"/>      \n        </ion-avatar>\n        <h2 style="color: #4A6D68; font-size: 13px;"><strong>{{item.producto}}</strong></h2> \n        <h3 style="color: #505A53;">Marca: <strong>{{item.marca}}</strong></h3>\n        <h3 style="color: #505A53;">Existencias: <strong style="color: #C10000;">{{item.existencias}}</strong></h3>\n        <h4 style="opacity: 50%;">Codigo KPI: <strong>{{item.codigoKPI}}</strong></h4>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n `/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menuclienteagotados\menuclienteagotados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MenuclienteagotadosPage);
    return MenuclienteagotadosPage;
}());

//# sourceMappingURL=menuclienteagotados.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuclientemostrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuclientemostrarPage = (function () {
    function MenuclientemostrarPage(navCtrl, navParams, loadingCtrl, ProductoService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
        this.ProductoService = ProductoService;
        this.BDProducto = window.localStorage.getItem('datosProducto');
        this.datosP = JSON.parse(this.BDProducto);
        console.log(this.datosP);
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    MenuclientemostrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuclientemostrarPage');
    };
    MenuclientemostrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuclientemostrar',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menuclientemostrar\menuclientemostrar.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Detalles del producto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding> \n\n  <br>\n  <br> \n\n  <ion-card-content style="text-align: -webkit-center;"> \n    <h3 style="color: #0C369C;"><strong>{{datosP.producto}}</strong></h3>\n  </ion-card-content> \n\n  <ion-item no-lines style="text-align: center;">\n        <h3 style="color: #505A53;">Marca: <strong>{{datosP.marca}}</strong></h3><br>\n        <h3 style="color: #505A53;">Existencias: <strong style="color: #88BD54;">{{datosP.existencias}}</strong></h3><br>\n        <h4 style="opacity: 50%;">Codigo KPI: <strong>{{datosP.codigoKPI}}</strong></h4>\n  </ion-item>\n\n\n    <ion-grid style="text-align: -webkit-center; margin-top: 10px;">\n      <ion-row> \n        <ion-col> \n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Publico</p>\n                <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pClientePublico}}</strong></p>\n              </div> \n            </ion-item>\n        </ion-col>\n        <ion-col> \n          <ion-item no-lines>\n            <div style="text-align: -webkit-center;">\n              <p style="font-size: 10px; color: #505A53;">Mayorista</p>\n              <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pClienteMayorista}}</strong></p>\n            </div> \n          </ion-item>\n      </ion-col>\n      </ion-row>\n    </ion-grid> \n\n\n  <div class="c2">\n    <ion-grid style="text-align: -webkit-center;">\n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta2">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">IEPS</p>\n                <p style="font-size: 15px; color: #0C369C;"><strong>{{datosP.porceniepsCliente}} %</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta2">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">IVA</p>\n                <p style="font-size: 15px; color: #0C369C;"><strong>{{datosP.porcenivaCliente}} %</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menuclientemostrar\menuclientemostrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MenuclientemostrarPage);
    return MenuclientemostrarPage;
}());

//# sourceMappingURL=menuclientemostrar.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromocionesPage = (function () {
    function PromocionesPage(navCtrl, navParams, ProductoService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.promociones = [];
        this.promocionesLista = [];
        this.ProductoService = ProductoService;
        this.listar_promociones();
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    PromocionesPage.prototype.listar_promociones = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Cargando promociones...",
        });
        this.loading.present();
        this.ProductoService.listar_promociones().subscribe(function (data) {
            console.log(data);
            _this.promociones = data;
            _this.promocionesLista = _this.promociones;
            if (data.length != 0) {
                _this.loading.dismiss();
                console.log('Tienes promociones agregadas');
                // this.navCtrl.push(SlidePage);
            }
            if (data.length === 0) {
                _this.loading.dismiss();
                console.log('No hay promociones agregadas');
                //this.navCtrl.push(BienvenidaPage);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
            //() =>  console.log('cargar equipos complete')
        });
    };
    // PARA ACTUALIZAR LOS DATOS
    PromocionesPage.prototype.Refrescar = function (refresher) {
        console.log('Comienzo de la operación asincrónica', refresher);
        this.listar_promociones();
        setTimeout(function () {
            console.log('La operación asincrónica ha finalizado');
            refresher.complete();
        }, 2000);
    };
    PromocionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromocionesPage');
    };
    PromocionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promociones',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\promociones\promociones.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Promociones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="Refrescar($event)">\n    <ion-refresher-content \n    refreshingSpinner="circles"\n    refreshingText="Actualizando lista...">\n    </ion-refresher-content>  \n  </ion-refresher>\n\n<ion-list *ngFor="let item of promociones; let i=index;">\n  <ion-item>\n    <ion-avatar>\n     <div style="text-align:center;" >\n      <img src="{{item.foto}}" id="Foto">\n     </div>\n    </ion-avatar>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n      `/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\promociones\promociones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PromocionesPage);
    return PromocionesPage;
}());

//# sourceMappingURL=promociones.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocionesadminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PromocionesadminPage = (function () {
    function PromocionesadminPage(navCtrl, navParams, ProductoService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.promociones = [];
        this.promocionesLista = [];
        this.submitted = false;
        this.ProductoService = ProductoService;
        this.listar_promociones();
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    // PARA ACTUALIZAR LOS DATOS
    PromocionesadminPage.prototype.Refrescar = function (refresher) {
        console.log('Comienzo de la operación asincrónica', refresher);
        this.listar_promociones();
        setTimeout(function () {
            console.log('La operación asincrónica ha finalizado');
            refresher.complete();
        }, 2000);
    };
    PromocionesadminPage.prototype.listar_promociones = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Cargando promociones...",
        });
        this.loading.present();
        this.ProductoService.listar_promociones().subscribe(function (data) {
            console.log(data);
            _this.promociones = data;
            _this.promocionesLista = _this.promociones;
            if (data.length != 0) {
                _this.loading.dismiss();
                console.log('Tienes promociones agregadas');
                // this.navCtrl.push(SlidePage);
            }
            if (data.length === 0) {
                _this.loading.dismiss();
                console.log('No hay promociones agregadas');
                //this.navCtrl.push(BienvenidaPage);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
            //() =>  console.log('cargar equipos complete')
        });
    };
    PromocionesadminPage.prototype.enlace_agregar_promocion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["y" /* PromocionesagregaradminPage */]);
    };
    PromocionesadminPage.prototype.detalles = function (event, item) {
        window.localStorage.setItem('imagenPromocion', JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["x" /* PromocionesadmineditarPage */]);
    };
    PromocionesadminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromocionesadminPage');
    };
    PromocionesadminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promocionesadmin',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\promocionesadmin\promocionesadmin.html"*/`<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Promociones</ion-title>\n  </ion-navbar>\n\n  <ion-fab right top>\n    <button ion-fab ><ion-icon name="arrow-down"></ion-icon></button>\n    <ion-fab-list side="bottom">\n      <img ion-fab style="border-radius: 50%;" src="img/icon/oferta2.png" (click)="enlace_agregar_promocion()" />\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <p style="color: #0C369C;">Agregar promoción</p>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="Refrescar($event)">\n    <ion-refresher-content \n    refreshingSpinner="circles"\n    refreshingText="Actualizando lista...">\n    </ion-refresher-content>  \n  </ion-refresher>\n\n  <ion-list *ngFor="let item of promociones; let i=index;">\n    <ion-item (click)="detalles($event,item)">\n        <ion-avatar>\n        <div style="text-align:center;" >\n          <img src="{{item.foto}}" id="Foto">\n        </div>\n        </ion-avatar>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\promocionesadmin\promocionesadmin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PromocionesadminPage);
    return PromocionesadminPage;
}());

//# sourceMappingURL=promocionesadmin.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosoflinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductosoflinePage = (function () {
    function ProductosoflinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var productos = JSON.parse(localStorage.getItem("productos"));
        this.datosP = productos;
        console.log(this.datosP);
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    ProductosoflinePage.prototype.detalles = function (event, item) {
        if (this.perfil.tipoCuenta == 1) {
            window.localStorage.setItem('datosProducto', JSON.stringify(item));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["u" /* ProductosoflinemostrarPage */]);
        }
        else if (this.perfil.tipoCuenta == 2) {
            window.localStorage.setItem('datosProducto', JSON.stringify(item));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["m" /* MenudistribuidormostrarPage */]);
        }
        else if (this.perfil.tipoCuenta == 3) {
            window.localStorage.setItem('datosProducto', JSON.stringify(item));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["i" /* MenuclientemostrarPage */]);
        }
    };
    // BARRA DE BUSCADOR
    ProductosoflinePage.prototype.marca = function (ev) {
        this.datosP = this.datosP;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.datosP = this.datosP.filter(function (item) {
                return (item.marca.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    ProductosoflinePage.prototype.productoo = function (ev) {
        this.datosP = this.datosP;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.datosP = this.datosP.filter(function (item) {
                return (item.producto.toString().toLowerCase().indexOf(val.toLowerCase()) == "");
            });
        }
    };
    ProductosoflinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosoflinePage');
    };
    ProductosoflinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productosofline',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productosofline\productosofline.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Productos ofline</ion-title>\n\n  </ion-navbar>\n\n  <ion-item no-lines>\n    <ion-searchbar padding cancelButtonText (ionInput)="marca($event)" placeholder="Buscar por marca">\n    </ion-searchbar>\n    <ion-searchbar style="margin-top: -15px;" padding cancelButtonText (ionInput)="productoo($event)" placeholder="Buscar por producto">\n    </ion-searchbar>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  \n  <ion-list *ngFor="let item of datosP; let i=index;">\n    <ion-card class="lista" (click)="detalles($event,item)">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="img/icon/product.png"/>      \n        </ion-avatar>\n        <h2 style="color: #4A6D68; font-size: 13px; margin-top: 5px;"><strong>{{item.producto}}</strong></h2> \n        <h3 style="color: #505A53;">Codigo KPI: <strong>{{item.codigoKPI}}</strong></h3>\n      </ion-item>\n      <ion-grid style="text-align: center;">\n        <ion-row> \n          <ion-col>\n            <ion-chip *ngIf="item.existencias === \'0\' " color="rojo">\n              <ion-label style="margin: 0 10px;">Agotado</ion-label>\n            </ion-chip>\n            <ion-chip *ngIf="item.existencias >= \'1\'" color="btnlogin">\n              <ion-label style="margin: 0 10px;">En existencia</ion-label>\n            </ion-chip>\n          </ion-col> \n          <ion-col>     \n            <h3 style="color: #505A53;">Marca: <br> <strong style="color: #88BD54;">{{item.marca}}</strong></h3>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>\n\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productosofline\productosofline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProductosoflinePage);
    return ProductosoflinePage;
}());

//# sourceMappingURL=productosofline.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosoflinemostrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductosoflinemostrarPage = (function () {
    function ProductosoflinemostrarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.BDProducto = window.localStorage.getItem('datosProducto');
        this.datosP = JSON.parse(this.BDProducto);
        console.log(this.datosP);
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    ProductosoflinemostrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosoflinemostrarPage');
    };
    ProductosoflinemostrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productosoflinemostrar',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productosoflinemostrar\productosoflinemostrar.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Detalles del producto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding> \n\n  <ion-card-content style="text-align: -webkit-center;"> \n    <h3 style="color: #0C369C;"><strong>{{datosP.producto}}</strong></h3>\n  </ion-card-content> \n  \n  <ion-item no-lines style="text-align: center;">\n        <h3 style="color: #505A53;">Marca: <strong style="color: #0C369C;">{{datosP.marca}}</strong></h3>\n        <h3 style="color: #505A53;">Existencias: <strong style="color: #88BD54;">{{datosP.existencias}}</strong></h3>\n        <h4 style="opacity: 50%;">Codigo KPI: <strong>{{datosP.codigoKPI}}</strong></h4>\n  </ion-item>\n\n\n    <ion-grid style="text-align: -webkit-center;">\n      <ion-row> \n        <ion-col> \n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Publico</p>\n                <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pClientePublico}}</strong></p>\n              </div> \n            </ion-item>\n        </ion-col>\n        <ion-col> \n          <ion-item no-lines>\n            <div style="text-align: -webkit-center;">\n              <p style="font-size: 10px; color: #505A53;">Mayorista</p>\n              <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pClienteMayorista}}</strong></p>\n            </div> \n          </ion-item>\n      </ion-col>\n      </ion-row>\n    </ion-grid> \n\n    <ion-grid style="text-align: -webkit-center; margin-top: -30px;">\n      <ion-row> \n        <ion-col> \n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Condición</p>\n                <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pAdminCondicion}}</strong></p>\n              </div> \n            </ion-item>\n        </ion-col>\n        <ion-col> \n          <ion-item no-lines>\n            <div style="text-align: -webkit-center;">\n              <p style="font-size: 10px; color: #505A53;">Deluxxe</p>\n              <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pAdminDeluxe}}</strong></p>\n            </div> \n          </ion-item>\n      </ion-col>\n      </ion-row>\n    </ion-grid> \n\n    <ion-grid style="text-align: -webkit-center; margin-top: -30px;">\n      <ion-row> \n        <ion-col> \n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Distribuidor</p>\n                <p style="font-size: 15px; color: #0C369C;">$ <strong>{{datosP.pVendedorDistribuidor}}</strong></p>\n              </div> \n            </ion-item>\n        </ion-col>\n        <ion-col> \n          <ion-item no-lines>\n            <div style="text-align: -webkit-center;">\n              <p style="font-size: 10px; color: #505A53;">Descuento distribuidor</p>\n              <p style="font-size: 15px; color: #0C369C;"><strong>{{datosP.pVendedorDTODistribuidor}} %</strong></p>\n            </div> \n          </ion-item>\n      </ion-col>\n      </ion-row>\n    </ion-grid> \n\n\n\n  <div class="c2">\n    <ion-grid style="text-align: -webkit-center;">\n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 1</p>\n                <p style="font-size: 14px; color: #0C369C;">$ <strong>{{datosP.ventaV1Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 2</p>\n                <p style="font-size: 14px; color: #0C369C;">$ <strong>{{datosP.ventaV2Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n    <ion-grid style="text-align: -webkit-center;">\n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 3</p>\n                <p style="font-size: 14px; color: #0C369C;">$ <strong>{{datosP.ventaV3Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">Volumen 4</p>\n                <p style="font-size: 14px; color: #0C369C;">$ <strong>{{datosP.ventaV4Vendedor}}</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  <div class="c2">\n    <ion-grid style="text-align: -webkit-center;">\n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta2">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">IEPS</p>\n                <p style="font-size: 15px; color: #0C369C;"><strong>{{datosP.porceniepsCliente}} %</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta2">\n            <ion-item no-lines>\n              <div style="text-align: -webkit-center;">\n                <p style="font-size: 10px; color: #505A53;">IVA</p>\n                <p style="font-size: 15px; color: #0C369C;"><strong>{{datosP.porcenivaCliente}} %</strong></p>\n              </div> \n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\productosoflinemostrar\productosoflinemostrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProductosoflinemostrarPage);
    return ProductosoflinemostrarPage;
}());

//# sourceMappingURL=productosoflinemostrar.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocionesagregaradminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_PromocionesFotoServices__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PromocionesagregaradminPage = (function () {
    function PromocionesagregaradminPage(navCtrl, navParams, PromocionesFotoService, loadingCtrl, alertCtrl, actionCtrl, platform, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.actionCtrl = actionCtrl;
        this.platform = platform;
        this.camera = camera;
        this.fotoPromocion = {};
        this.submitted = false;
        this.PromocionesFotoService = PromocionesFotoService;
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    PromocionesagregaradminPage.prototype.guardar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.fotoPromocion.foto);
            var loading_1 = this.loadingCtrl.create({
                content: "Guardando imagen...",
            });
            loading_1.present();
            this.imagen = window.localStorage.getItem('foto');
            this.PromocionesFotoService.agregarPromocion(this.imagen).subscribe(function (data) {
                _this.userData = data;
                console.log(data);
                loading_1.dismiss();
                if (_this.userData.estatus === "OK") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "¡EXITO!",
                        subTitle: "Imagen agregada correctamente",
                        buttons: [
                            {
                                text: 'DE ACUERDO',
                                handler: function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__index_paginas__["w" /* PromocionesadminPage */]);
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                if (_this.userData.estatus === "ERROR") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "¡ERROR!",
                        subTitle: "No se pudo agregar tu imagen, intentalo nuevamente",
                        buttons: ["DE ACUERDO"]
                    });
                    alert_2.present();
                }
            }, function (err) {
                //console.log(err);
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "¡ERROR DE CONEXION!",
                    subTitle: "Ocurrio un problema para realizar la operación, intentalo más tarde..",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
            });
        }
    };
    PromocionesagregaradminPage.prototype.upload = function () {
        var _this = this;
        var actionsheet = this.actionCtrl.create({
            title: 'Elige una opción',
            buttons: [{
                    text: 'Libreria',
                    icon: !this.platform.is('md') ? 'images' : null,
                    handler: function () {
                        // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        _this.libreria('Libreria');
                        console.log('archivos del dispositivo');
                    }
                }, {
                    text: 'Camara',
                    icon: !this.platform.is('md') ? 'camera' : null,
                    handler: function () {
                        _this.camara('Camara');
                        console.log('Camara del dispositivo');
                    }
                }, {
                    text: 'Cancelar',
                    role: 'destructive',
                    icon: !this.platform.is('md') ? 'close-circle' : null,
                    handler: function () {
                        console.log('se cancelo la operacion');
                    }
                }]
        });
        actionsheet.present();
    };
    PromocionesagregaradminPage.prototype.libreria = function (info) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            window.localStorage.setItem('foto', _this.captureDataUrl);
        }, function (err) {
            // Handle error
        });
    };
    PromocionesagregaradminPage.prototype.camara = function (info) {
        var _this = this;
        var cameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            window.localStorage.setItem('foto', _this.captureDataUrl);
        }, function (err) {
            // Handle error
        });
    };
    PromocionesagregaradminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromocionesagregaradminPage');
    };
    PromocionesagregaradminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promocionesagregaradmin',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\promocionesagregaradmin\promocionesagregaradmin.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Agregar imagen</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n\n\n\n  <form #guardarForm="ngForm">\n\n    <div class="Imagen" style="text-align:center;" *ngIf="captureDataUrl == null" (click)="upload()">\n     <img src="img/icon/camara.png">\n      <div >Agrega una foto o imagen</div>\n    </div>    \n\n    <div (click)="upload()" *ngIf="captureDataUrl != null">\n      <img  src="{{fotoPromocion?.foto}}" id="Imagen" [src]="captureDataUrl" >\n    </div>\n\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n\n\n\n    <button ion-button round block color="boton" type="submit" (click)="guardar(guardarForm)">Guardar</button>\n\n  </form>\n\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\promocionesagregaradmin\promocionesagregaradmin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_PromocionesFotoServices__["a" /* PromocionesFotoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], PromocionesagregaradminPage);
    return PromocionesagregaradminPage;
}());

//# sourceMappingURL=promocionesagregaradmin.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocionesadmineditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_PromocionesFotoServices__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PromocionesadmineditarPage = (function () {
    function PromocionesadmineditarPage(navCtrl, navParams, PromocionesFotoService, loadingCtrl, alertCtrl, actionCtrl, platform, camera, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.actionCtrl = actionCtrl;
        this.platform = platform;
        this.camera = camera;
        this.viewCtrl = viewCtrl;
        this.options = {
            url2: 'http://54.209.82.90/agrovegusa/API/foto.php'
        };
        this.imagenProFoto = {};
        this.submitted = false;
        this.PromocionesFotoService = PromocionesFotoService;
        this.imagenPromocion = window.localStorage.getItem('imagenPromocion');
        this.imagenP = JSON.parse(this.imagenPromocion);
        console.log(this.imagenP);
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    PromocionesadmineditarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    //EDITAR VEHICULO
    PromocionesadmineditarPage.prototype.editar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.imagenP.idPromocion);
            console.log(this.imagenProFoto.foto);
            var loading_1 = this.loadingCtrl.create({
                content: "Cambiando la imagen, espere...",
            });
            loading_1.present();
            this.imagen = window.localStorage.getItem('foto');
            this.PromocionesFotoService.editarPromocion(this.imagenP.idPromocion, this.imagen).subscribe(function (data) {
                _this.userData = data;
                console.log(data);
                loading_1.dismiss();
                if (_this.userData.estatus === "OK") {
                    //console.log('Usuario registrado');
                    var alert_1 = _this.alertCtrl.create({
                        title: "¡OPERACION EXITOSA!",
                        subTitle: "Tu imagen se cambio correctamente",
                        buttons: [
                            {
                                text: 'DE ACUERDO',
                                handler: function () {
                                    _this.dismiss();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                if (_this.userData.estatus === "ERROR") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "¡ERROR!",
                        subTitle: "No se pudo cambiar tu imagen, intentalo nuevamente",
                        buttons: ["DE ACUERDO"]
                    });
                    alert_2.present();
                }
            }, function (err) {
                //console.log(err);
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "Error de conexión",
                    subTitle: "Ocurrio un problema para realizar la operación, intentalo más tarde",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
            });
        }
    };
    PromocionesadmineditarPage.prototype.upload = function () {
        var _this = this;
        var actionsheet = this.actionCtrl.create({
            title: 'Elige una opción',
            buttons: [{
                    text: 'Libreria',
                    icon: !this.platform.is('md') ? 'images' : null,
                    handler: function () {
                        // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        _this.libreria('Libreria');
                        console.log('archivos del dispositivo');
                    }
                }, {
                    text: 'Camara',
                    icon: !this.platform.is('md') ? 'camera' : null,
                    handler: function () {
                        _this.camara('Camara');
                        console.log('Camara del dispositivo');
                    }
                }, {
                    text: 'Cancelar',
                    role: 'destructive',
                    icon: !this.platform.is('md') ? 'close-circle' : null,
                    handler: function () {
                        console.log('se cancelo la operacion');
                    }
                }]
        });
        actionsheet.present();
    };
    PromocionesadmineditarPage.prototype.libreria = function (info) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            window.localStorage.setItem('foto', _this.captureDataUrl);
        }, function (err) {
            // Handle error
        });
    };
    PromocionesadmineditarPage.prototype.camara = function (info) {
        var _this = this;
        var cameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            window.localStorage.setItem('foto', _this.captureDataUrl);
        }, function (err) {
            // Handle error
        });
    };
    //ELIMINAR VEHICULO
    PromocionesadmineditarPage.prototype.eliminar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.imagenP.idPromocion);
            var loading_2 = this.loadingCtrl.create({
                content: "Eliminando imagen, espere...",
            });
            loading_2.present();
            this.PromocionesFotoService.eliminarPromocion(this.imagenP.idPromocion).subscribe(function (data) {
                _this.userData = data;
                console.log(data);
                loading_2.dismiss();
                if (_this.userData.estatus === "OK") {
                    //console.log('Usuario registrado');
                    var alert_3 = _this.alertCtrl.create({
                        title: "¡OPERACION EXITOSA!",
                        subTitle: "Tu imagen se elimino correctamente",
                        buttons: [
                            {
                                text: 'DE ACUERDO',
                                handler: function () {
                                    _this.dismiss();
                                }
                            }
                        ]
                    });
                    alert_3.present();
                }
                if (_this.userData.estatus === "ERROR") {
                    var alert_4 = _this.alertCtrl.create({
                        title: "¡ERROR!",
                        subTitle: "No se pudo eliminar esta imagen, intentalo nuevamente",
                        buttons: ["DE ACUERDO"]
                    });
                    alert_4.present();
                }
            }, function (err) {
                //console.log(err);
                loading_2.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "Error de conexión",
                    subTitle: "Ocurrio un problema para realizar la operación, intentalo más tarde",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
            });
        }
    };
    PromocionesadmineditarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromocionesadmineditarPage');
    };
    PromocionesadmineditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promocionesadmineditar',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\promocionesadmineditar\promocionesadmineditar.html"*/`<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Editar Imagen</ion-title>\n  </ion-navbar>\n\n  <ion-fab right top>\n    <button ion-fab ><ion-icon name="arrow-down"></ion-icon></button>\n    <ion-fab-list side="bottom">\n      <form #eliminarForm="ngForm">     \n        <img ion-fab style="border-radius: 50%;" (click)="eliminar(eliminarForm)"  src="img/icon/imgTr.png"/>\n      </form>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <p style="color: #FF0000;">Eliminar imagen</p>\n    </ion-fab-list>\n  </ion-fab> \n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h5 style="text-align: center; color: #4A6D68;">Imagen actual</h5>\n  <div style="text-align:center;" >\n    <img src="{{imagenP?.foto}}" id="Foto">\n  </div>\n\n  <br>\n\n  <form #editarForm="ngForm">\n\n    <h5 style="text-align: center; color: #4A6D68;">Imagen Nueva</h5>\n\n    <div class="Imagen" style="text-align:center;" *ngIf="captureDataUrl == null" (click)="upload()">\n      <img src="img/icon/camara.png">\n       <div >Agrega una nueva foto o imagen</div>\n     </div>    \n \n     <div (click)="upload()" *ngIf="captureDataUrl != null">\n       <img  src="{{imagenProFoto?.foto}}" id="Imagen" [src]="captureDataUrl" >\n     </div>\n\n<br>\n\n    <button ion-button round block color="txteditar" type="submit" (click)="editar(editarForm)">Guardar cambios</button>\n\n</form>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\promocionesadmineditar\promocionesadmineditar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__servicios_PromocionesFotoServices__["a" /* PromocionesFotoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], PromocionesadmineditarPage);
    return PromocionesadmineditarPage;
}());

//# sourceMappingURL=promocionesadmineditar.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuadministradoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuadministradoresPage = (function () {
    function MenuadministradoresPage(navCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    MenuadministradoresPage.prototype.promociones = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["b" /* AdministradorespromocionPage */]);
    };
    MenuadministradoresPage.prototype.productos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["n" /* MenudistribuidorproductoPage */]);
    };
    MenuadministradoresPage.prototype.productosofline = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "¡ATENCION!",
            message: "Para ver la lista de productos ofline, primero carga la lista de productos con Wifi",
            buttons: [
                {
                    text: "VOLVER",
                    role: "cancel",
                    handler: function () { }
                },
                {
                    text: "YA LO HICE",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["t" /* ProductosoflinePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    //CERRAR SESION
    MenuadministradoresPage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "¡ATENCION!",
            message: "¿Estas seguro que quieres cerrar sesión?",
            buttons: [
                {
                    text: "NO",
                    handler: function () { }
                },
                {
                    text: "SI",
                    handler: function () {
                        window.localStorage.removeItem("dataUser");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["d" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    MenuadministradoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuadministradoresPage');
    };
    MenuadministradoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuadministradores',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menuadministradores\menuadministradores.html"*/`\n<ion-content padding>\n  <br>\n  <br>\n  \n  <ion-grid style="text-align: center;"> \n    <ion-row> \n      <ion-col> \n        <div style="text-align: center;">\n          <img src="img/logo.png" style="width: 60%;">\n            <p style="padding: 0 0px; font-size: 12px; color: #505A53; margin-top: 1%; margin-right: 0%;">Bienvenid@ <br> \n            <strong style="font-size: 16px; color: #88BD54;">{{perfil.nombreUsuario}}</strong> <br> \n            <strong style="font-size: 14px; color: #505A53;">Administradores</strong> </p>\n        </div> \n      </ion-col>\n    </ion-row> \n  </ion-grid> \n\n  <div class="redes">\n    <ion-grid style="text-align: center; margin-top: 0%;">\n      <ion-row>\n        <ion-col>\n          <img src="img/facebookk.png"\n            onclick="window.open(\'https://www.facebook.com/agrovegusa\',\'_system\',\'location=yes\')">\n        </ion-col>\n        <ion-col>\n          <img src="img/instagram.png"\n            onclick="window.open(\'https://www.instagram.com/agrovegusa/?hl=en\',\'_system\',\'location=yes\')">\n        </ion-col>\n        <ion-col>\n          <img src="img/youtube.png"\n            onclick="window.open(\'https://www.youtube.com/channel/UCoMSuFK4yxFvm6I48F2fCjw\',\'_system\',\'location=yes\')">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row> \n        <ion-col>     \n          <ion-card class="tarjeta" (click)="productos()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/bolsaP.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Productos W</strong></p>    \n          </ion-card>\n        </ion-col>\n        <ion-col>     \n          <ion-card class="tarjeta" (click)="productosofline()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/bolsaO.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Productos O</strong></p>    \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  \n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row>\n        <ion-col> \n          <ion-card class="tarjeta" onclick="window.open(\'https://agrovegusa.com/\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/web.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Sitio web</strong></p>     \n          </ion-card>\n        </ion-col>  \n        <ion-col>     \n          <ion-card class="tarjeta" (click)="promociones()">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/promociones.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Promociones</strong></p>     \n          </ion-card>\n        </ion-col>\n  \n      </ion-row>\n    </ion-grid> \n  </div>\n\n  \n  <div class="c1">\n    <ion-grid style="text-align: center;">  \n      <ion-row> \n        <ion-col> \n          <ion-card class="tarjeta" onclick="window.open(\'http://agrovegusa.sytes.net/saimovil/DefaultP.aspx\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/proveedor.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Proveedor</strong></p>      \n          </ion-card>\n        </ion-col> \n        <ion-col>     \n          <ion-card class="tarjeta" onclick="window.open(\'http://agrovegusa.sytes.net/saimovil/DefaultE.aspx\')">\n            <ion-item>\n              <ion-avatar item-center>\n                <div style="text-align: -webkit-center;">\n                <img src="img/icon/distribuidor.png"/> \n                </div>     \n               </ion-avatar>\n            </ion-item>\n              <p style="font-size: 16px; color: #88BD54;"><strong>Distribuidor</strong></p>     \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n\n  <div style="text-align: center;" (click)="logout()">\n    <p style="font-size: 16px; color: #FF0000;">Cerrar sesión <img style="width: 4%;" (click)="logout()" src="img/icon/salir.png"/></p>\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\menuadministradores\menuadministradores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MenuadministradoresPage);
    return MenuadministradoresPage;
}());

//# sourceMappingURL=menuadministradores.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministradorespromocionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdministradorespromocionPage = (function () {
    function AdministradorespromocionPage(navCtrl, navParams, ProductoService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.promociones = [];
        this.promocionesLista = [];
        this.ProductoService = ProductoService;
        this.listar_promociones();
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    AdministradorespromocionPage.prototype.listar_promociones = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Cargando promociones...",
        });
        this.loading.present();
        this.ProductoService.listar_promociones().subscribe(function (data) {
            console.log(data);
            _this.promociones = data;
            _this.promocionesLista = _this.promociones;
            if (data.length != 0) {
                _this.loading.dismiss();
                console.log('Tienes promociones agregadas');
                // this.navCtrl.push(SlidePage);
            }
            if (data.length === 0) {
                _this.loading.dismiss();
                console.log('No hay promociones agregadas');
                //this.navCtrl.push(BienvenidaPage);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
            //() =>  console.log('cargar equipos complete')
        });
    };
    // PARA ACTUALIZAR LOS DATOS
    AdministradorespromocionPage.prototype.Refrescar = function (refresher) {
        console.log('Comienzo de la operación asincrónica', refresher);
        this.listar_promociones();
        setTimeout(function () {
            console.log('La operación asincrónica ha finalizado');
            refresher.complete();
        }, 2000);
    };
    AdministradorespromocionPage.prototype.detalles = function (event, item) {
        window.localStorage.setItem('imagenPromocion', JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["c" /* AdministradorespromocioneditarPage */]);
    };
    AdministradorespromocionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdministradorespromocionPage');
    };
    AdministradorespromocionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administradorespromocion',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\administradorespromocion\administradorespromocion.html"*/`\n<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Promociones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="Refrescar($event)">\n    <ion-refresher-content \n    refreshingSpinner="circles"\n    refreshingText="Actualizando lista...">\n    </ion-refresher-content>  \n  </ion-refresher>\n\n  <ion-list *ngFor="let item of promociones; let i=index;">\n    <ion-item (click)="detalles($event,item)">\n        <ion-avatar>\n        <div style="text-align:center;" >\n          <img src="{{item.foto}}" id="Foto">\n        </div>\n        </ion-avatar>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n      \n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\administradorespromocion\administradorespromocion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_ProductosServices__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AdministradorespromocionPage);
    return AdministradorespromocionPage;
}());

//# sourceMappingURL=administradorespromocion.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministradorespromocioneditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_PromocionesFotoServices__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdministradorespromocioneditarPage = (function () {
    function AdministradorespromocioneditarPage(navCtrl, navParams, PromocionesFotoService, loadingCtrl, alertCtrl, actionCtrl, platform, camera, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.actionCtrl = actionCtrl;
        this.platform = platform;
        this.camera = camera;
        this.viewCtrl = viewCtrl;
        this.options = {
            url2: 'http://54.209.82.90/agrovegusa/API/foto.php'
        };
        this.imagenProFoto = {};
        this.submitted = false;
        this.PromocionesFotoService = PromocionesFotoService;
        this.imagenPromocion = window.localStorage.getItem('imagenPromocion');
        this.imagenP = JSON.parse(this.imagenPromocion);
        console.log(this.imagenP);
        this.datosUsuario = window.localStorage.getItem('dataUser');
        this.perfil = JSON.parse(this.datosUsuario);
        console.log(this.perfil);
    }
    AdministradorespromocioneditarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    //EDITAR VEHICULO
    AdministradorespromocioneditarPage.prototype.editar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.imagenP.idPromocion);
            console.log(this.imagenProFoto.foto);
            var loading_1 = this.loadingCtrl.create({
                content: "Cambiando la imagen, espere...",
            });
            loading_1.present();
            this.imagen = window.localStorage.getItem('foto');
            this.PromocionesFotoService.editarPromocion(this.imagenP.idPromocion, this.imagen).subscribe(function (data) {
                _this.userData = data;
                console.log(data);
                loading_1.dismiss();
                if (_this.userData.estatus === "OK") {
                    //console.log('Usuario registrado');
                    var alert_1 = _this.alertCtrl.create({
                        title: "¡OPERACION EXITOSA!",
                        subTitle: "Tu imagen se cambio correctamente",
                        buttons: [
                            {
                                text: 'DE ACUERDO',
                                handler: function () {
                                    _this.dismiss();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                if (_this.userData.estatus === "ERROR") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "¡ERROR!",
                        subTitle: "No se pudo cambiar tu imagen, intentalo nuevamente",
                        buttons: ["DE ACUERDO"]
                    });
                    alert_2.present();
                }
            }, function (err) {
                //console.log(err);
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "Error de conexión",
                    subTitle: "Ocurrio un problema para realizar la operación, intentalo más tarde",
                    buttons: ["DE ACUERDO"]
                });
                alert.present();
            });
        }
    };
    AdministradorespromocioneditarPage.prototype.upload = function () {
        var _this = this;
        var actionsheet = this.actionCtrl.create({
            title: 'Elige una opción',
            buttons: [{
                    text: 'Libreria',
                    icon: !this.platform.is('md') ? 'images' : null,
                    handler: function () {
                        // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        _this.libreria('Libreria');
                        console.log('archivos del dispositivo');
                    }
                }, {
                    text: 'Camara',
                    icon: !this.platform.is('md') ? 'camera' : null,
                    handler: function () {
                        _this.camara('Camara');
                        console.log('Camara del dispositivo');
                    }
                }, {
                    text: 'Cancelar',
                    role: 'destructive',
                    icon: !this.platform.is('md') ? 'close-circle' : null,
                    handler: function () {
                        console.log('se cancelo la operacion');
                    }
                }]
        });
        actionsheet.present();
    };
    AdministradorespromocioneditarPage.prototype.libreria = function (info) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            window.localStorage.setItem('foto', _this.captureDataUrl);
        }, function (err) {
            // Handle error
        });
    };
    AdministradorespromocioneditarPage.prototype.camara = function (info) {
        var _this = this;
        var cameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            window.localStorage.setItem('foto', _this.captureDataUrl);
        }, function (err) {
            // Handle error
        });
    };
    AdministradorespromocioneditarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdministradorespromocioneditarPage');
    };
    AdministradorespromocioneditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administradorespromocioneditar',template:/*ion-inline-start:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\administradorespromocioneditar\administradorespromocioneditar.html"*/`<ion-header translucent="true" no-border>\n  <ion-navbar color="sincolor" style="text-align: center;">\n    <ion-title color="agro2" style="text-align: -webkit-center;">Editar Imagen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h5 style="text-align: center; color: #4A6D68;">Imagen actual</h5>\n  <div style="text-align:center;" >\n    <img src="{{imagenP?.foto}}" id="Foto">\n  </div>\n\n  <br>\n\n  <form #editarForm="ngForm">\n\n    <h5 style="text-align: center; color: #4A6D68;">Imagen Nueva</h5>\n\n    <div class="Imagen" style="text-align:center;" *ngIf="captureDataUrl == null" (click)="upload()">\n      <img src="img/icon/camara.png">\n       <div >Agrega una nueva foto o imagen</div>\n     </div>    \n \n     <div (click)="upload()" *ngIf="captureDataUrl != null">\n       <img  src="{{imagenProFoto?.foto}}" id="Imagen" [src]="captureDataUrl" >\n     </div>\n\n<br>\n\n    <button ion-button round block color="txteditar" type="submit" (click)="editar(editarForm)">Guardar cambios</button>\n\n</form>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Rodrigo\Desktop\Agrovegusa\agrovegusa\src\pages\administradorespromocioneditar\administradorespromocioneditar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__servicios_PromocionesFotoServices__["a" /* PromocionesFotoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], AdministradorespromocioneditarPage);
    return AdministradorespromocioneditarPage;
}());

//# sourceMappingURL=administradorespromocioneditar.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_URL__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this.http = http;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__servicios_URL__["a" /* url */];
    }
    //LISTAR USUARIOS
    UsuarioService.prototype.listar_usuarios = function () {
        this.params = 'action=listar_usuarios';
        var url = this.serverUrl + this.params;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    //AGREGAR USUARIO
    UsuarioService.prototype.agregar_usuario = function (Username, Pass, nombreUsuario, municipio, estado, telefono, Correo, numeroPromotor, tipoCuenta) {
        this.params = 'action=agregar_usuario&Username=' + Username + '&Pass=' + Pass + '&nombreUsuario=' + nombreUsuario + '&municipio=' + municipio + '&estado=' + estado + '&telefono=' + telefono + '&Correo=' + Correo + '&numeroPromotor=' + numeroPromotor + '&tipoCuenta=' + tipoCuenta;
        var url = this.serverUrl + this.params;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    //EDITAR USUARIO
    UsuarioService.prototype.editar_usuario = function (idUsuario, Username, Pass, nombreUsuario, municipio, estado, telefono, Correo, numeroPromotor, tipoCuenta) {
        this.params = 'action=editar_usuario&idUsuario=' + idUsuario + '&Username=' + Username + '&Pass=' + Pass + '&nombreUsuario=' + nombreUsuario + '&municipio=' + municipio + '&estado=' + estado + '&telefono=' + telefono + '&Correo=' + Correo + '&numeroPromotor=' + numeroPromotor + '&tipoCuenta=' + tipoCuenta;
        var url = this.serverUrl + this.params;
        //console.log(url);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    //ELIMINAR USUARIO
    UsuarioService.prototype.eliminar_usuario = function (idUsuario) {
        this.params = 'action=eliminar_usuario&idUsuario=' + idUsuario;
        var url = this.serverUrl + this.params;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=UsuarioServices.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return url2; });
var url = "http://54.209.82.90/agrovegusa/API/?";
var url2 = "http://54.209.82.90/agrovegusa/API/foto.php";
//# sourceMappingURL=URL.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocionesFotoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_URL__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PromocionesFotoService = (function () {
    function PromocionesFotoService(http) {
        this.http = http;
        this.http = http;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__servicios_URL__["b" /* url2 */];
    }
    //AGREGAR PROMOCION
    PromocionesFotoService.prototype.agregarPromocion = function (foto) {
        var body = {
            "action": "agregarPromocion",
            "foto": foto
        };
        9;
        console.log(JSON.stringify(body));
        var bodyJ = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.params = '';
        var url = this.serverUrl + this.params;
        return this.http.post(url, bodyJ, options).map(function (res) { return res.json(); });
    };
    //EDITAR VEHICULO FOTO
    PromocionesFotoService.prototype.editarPromocion = function (idPromocion, foto) {
        var body = {
            "action": "editarPromocion",
            "idPromocion": idPromocion,
            "foto": foto
        };
        console.log(JSON.stringify(body));
        var bodyJ = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.params = '';
        var url = this.serverUrl + this.params;
        return this.http.post(url, bodyJ, options).map(function (res) { return res.json(); });
    };
    //ELIMINAR VEHICULO
    PromocionesFotoService.prototype.eliminarPromocion = function (idPromocion) {
        var body = {
            "action": "eliminarPromocion",
            "idPromocion": idPromocion
        };
        console.log(JSON.stringify(body));
        var bodyJ = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.params = '';
        var url = this.serverUrl + this.params;
        return this.http.post(url, bodyJ, options).map(function (res) { return res.json(); });
    };
    PromocionesFotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PromocionesFotoService);
    return PromocionesFotoService;
}());

//# sourceMappingURL=PromocionesFotoServices.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(278);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menuadministrador_menuadministrador__ = __webpack_require__(279);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__menuadministrador_menuadministrador__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos_productos__ = __webpack_require__(280);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__productos_productos__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productosdetalles_productosdetalles__ = __webpack_require__(281);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_3__productosdetalles_productosdetalles__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productosagregar_productosagregar__ = __webpack_require__(282);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_4__productosagregar_productosagregar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productoseditar_productoseditar__ = __webpack_require__(283);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_5__productoseditar_productoseditar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__acuerdo_acuerdo__ = __webpack_require__(284);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__acuerdo_acuerdo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menudistribuidor_menudistribuidor__ = __webpack_require__(285);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__menudistribuidor_menudistribuidor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menucliente_menucliente__ = __webpack_require__(286);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__menucliente_menucliente__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__productosagotados_productosagotados__ = __webpack_require__(287);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_9__productosagotados_productosagotados__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__usuarioslista_usuarioslista__ = __webpack_require__(288);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_10__usuarioslista_usuarioslista__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__usuariosmostrar_usuariosmostrar__ = __webpack_require__(289);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_11__usuariosmostrar_usuariosmostrar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__usuariosagregar_usuariosagregar__ = __webpack_require__(290);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_12__usuariosagregar_usuariosagregar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__usuarioseditar_usuarioseditar__ = __webpack_require__(291);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_13__usuarioseditar_usuarioseditar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menudistribuidorproducto_menudistribuidorproducto__ = __webpack_require__(292);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_14__menudistribuidorproducto_menudistribuidorproducto__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__menudistribuidoragotados_menudistribuidoragotados__ = __webpack_require__(293);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_15__menudistribuidoragotados_menudistribuidoragotados__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__menudistribuidormostrar_menudistribuidormostrar__ = __webpack_require__(294);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_16__menudistribuidormostrar_menudistribuidormostrar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menuclienteproducto_menuclienteproducto__ = __webpack_require__(295);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_17__menuclienteproducto_menuclienteproducto__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__menuclienteagotados_menuclienteagotados__ = __webpack_require__(296);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_18__menuclienteagotados_menuclienteagotados__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__menuclientemostrar_menuclientemostrar__ = __webpack_require__(297);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_19__menuclientemostrar_menuclientemostrar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__promociones_promociones__ = __webpack_require__(298);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_20__promociones_promociones__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__promocionesadmin_promocionesadmin__ = __webpack_require__(299);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_21__promocionesadmin_promocionesadmin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__productosofline_productosofline__ = __webpack_require__(300);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_22__productosofline_productosofline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__productosoflinemostrar_productosoflinemostrar__ = __webpack_require__(301);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_23__productosoflinemostrar_productosoflinemostrar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__promocionesagregaradmin_promocionesagregaradmin__ = __webpack_require__(302);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_24__promocionesagregaradmin_promocionesagregaradmin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__promocionesadmineditar_promocionesadmineditar__ = __webpack_require__(303);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_25__promocionesadmineditar_promocionesadmineditar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__menuadministradores_menuadministradores__ = __webpack_require__(304);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_26__menuadministradores_menuadministradores__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__administradorespromocion_administradorespromocion__ = __webpack_require__(305);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_27__administradorespromocion_administradorespromocion__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__administradorespromocioneditar_administradorespromocioneditar__ = __webpack_require__(306);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_28__administradorespromocioneditar_administradorespromocioneditar__["a"]; });





























//# sourceMappingURL=index.paginas.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map