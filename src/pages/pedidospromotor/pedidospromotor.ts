import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pedidospromotor',
  templateUrl: 'pedidospromotor.html',
})
export class PedidospromotorPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {


    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidospromotorPage');
  }

}
