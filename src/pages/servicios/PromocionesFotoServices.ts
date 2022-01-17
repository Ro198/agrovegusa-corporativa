import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import * as url from "../servicios/URL";
import 'rxjs/add/operator/map';


@Injectable()
export class PromocionesFotoService {

        serverUrl;
        params;


        constructor(public http: Http) {
            this.http = http
            this.serverUrl = url.url2

    }


//AGREGAR PROMOCION

agregarPromocion(foto){
        
        let body = {
        "action": "agregarPromocion",
        "foto": foto
        };
9
        console.log(JSON.stringify(body));
        
              let bodyJ = JSON.stringify(body);
              let headers = new Headers({ 'Content-Type': 'application/json' });
              let options = new RequestOptions({ headers: headers });
        
              this.params= ''
              var url = this.serverUrl+ this.params;
        
              return this.http.post(url, bodyJ, options) .map(res => res.json());    
}

//EDITAR VEHICULO FOTO

editarPromocion(idPromocion, foto){

    let body = { 
        "action": "editarPromocion",
        "idPromocion": idPromocion,
        "foto": foto
     };

     console.log(JSON.stringify(body));

    let bodyJ = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.params= ''
    var url = this.serverUrl+ this.params;

    return this.http.post(url, bodyJ, options) .map(res => res.json());      
}


//ELIMINAR VEHICULO

eliminarPromocion(idPromocion){

    let body = { 
        "action": "eliminarPromocion",
        "idPromocion": idPromocion
     };

     console.log(JSON.stringify(body));

    let bodyJ = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.params= ''
    var url = this.serverUrl+ this.params;

    return this.http.post(url, bodyJ, options) .map(res => res.json());      
}

}


