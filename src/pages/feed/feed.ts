import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
      "titulo":"Regis Beraldi",
      "data":"Novembro, 18 2018",
      "descricao":"Estou usando um app incrivel",
      "qtde_likes":12,
      "qtde_comments":120,
      "time_comments":"11h atras"
  }

  public nome_usuario: string = "Regis Beraldi do Codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void {
    alert("Total da soma e: " + (num1 + num2));
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10,99);
  }

}
