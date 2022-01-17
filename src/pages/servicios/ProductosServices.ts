import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as url from "../servicios/URL";
import 'rxjs/add/operator/map';


@Injectable()
export class ProductoService {

        serverUrl;
        params;


        constructor(public http: Http) {
            this.http = http
            this.serverUrl = url.url

    }

    

     //Listar promociones

     listar_promociones(){
        this.params= 'action=listar_promociones'
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json());
    }




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

    listar_productos(){
        this.params= 'action=listar_productos'
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json());
    }

    //Productos con existencias

    lista_productos_existencias(){
        this.params= 'action=lista_productos_existencias'
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json());
    }

    //Productos agotados

    lista_productos_agotados(){
        this.params= 'action=lista_productos_agotados'
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json());
    }
    
//AGREGAR PRODUCTO

agregar_producto(marca, codigoKPI, producto, pClientePublico, pAdminCondicion, pVendedorDTODistribuidor, pClienteMayorista, pVendedorDistribuidor, ventaV1Vendedor, 
    ventaV2Vendedor, ventaV3Vendedor, ventaV4Vendedor, pAdminDeluxe, porceniepsCliente, porcenivaCliente, existencias) {
    this.params='action=agregar_producto&marca='+marca
    +'&codigoKPI='+codigoKPI
    +'&producto='+producto
    +'&pClientePublico='+pClientePublico
    +'&pAdminCondicion='+pAdminCondicion
    +'&pVendedorDTODistribuidor='+pVendedorDTODistribuidor
    +'&pClienteMayorista='+pClienteMayorista
    +'&pVendedorDistribuidor='+pVendedorDistribuidor
    +'&ventaV1Vendedor='+ventaV1Vendedor
    +'&ventaV2Vendedor='+ventaV2Vendedor
    +'&ventaV3Vendedor='+ventaV3Vendedor
    +'&ventaV4Vendedor='+ventaV4Vendedor
    +'&pAdminDeluxe='+pAdminDeluxe
    +'&porceniepsCliente='+porceniepsCliente
    +'&porcenivaCliente='+porcenivaCliente
    +'&existencias='+existencias
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//EDITAR PRODUCTO

editar_producto(idProducto, marca, codigoKPI, producto, pClientePublico, pAdminCondicion, pVendedorDTODistribuidor, pClienteMayorista, pVendedorDistribuidor, 
    ventaV1Vendedor, ventaV2Vendedor, ventaV3Vendedor, ventaV4Vendedor, pAdminDeluxe, porceniepsCliente, porcenivaCliente, existencias){
    this.params='action=editar_producto&idProducto='+idProducto
    +'&marca='+marca
    +'&codigoKPI='+codigoKPI
    +'&producto='+producto
    +'&pClientePublico='+pClientePublico
    +'&pAdminCondicion='+pAdminCondicion
    +'&pVendedorDTODistribuidor='+pVendedorDTODistribuidor
    +'&pClienteMayorista='+pClienteMayorista
    +'&pVendedorDistribuidor='+pVendedorDistribuidor
    +'&ventaV1Vendedor='+ventaV1Vendedor
    +'&ventaV2Vendedor='+ventaV2Vendedor
    +'&ventaV3Vendedor='+ventaV3Vendedor
    +'&ventaV4Vendedor='+ventaV4Vendedor
    +'&pAdminDeluxe='+pAdminDeluxe
    +'&porceniepsCliente='+porceniepsCliente
    +'&porcenivaCliente='+porcenivaCliente
    +'&existencias='+existencias
            var url = this.serverUrl+ this.params;
            //console.log(url);
            return this.http.get(url).map(res => res.json());        
}


//ELIMINAR PRODUCTO

eliminar_producto(idProducto){
    this.params='action=eliminar_producto&idProducto='+idProducto
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json()); 
}


  
}