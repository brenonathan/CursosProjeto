import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

    curso;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
    let items=this.navParams.get('detalhes');

    let curso = this.navParams.get('key');
    console.log(curso);

    this.curso = curso;
  }

  fechar() {
    this.navCtrl.pop();
  }

}
