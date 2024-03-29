import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cursosArr;   
  
  constructor(public navCtrl: NavController) {

      this.cursosArr = [

      {
          "id": 1,
          "nome": "Informática",
          "professor": "Vitor",
          "dt_realizacao": "25/03/2022",
          "carga_horaria": 40,
          "img_icon": "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/-5be0989bbc0c9.jpg",
          "conteudo": [
              "Introdução a Informática",
              "Projetos",
              "Utilização Prática"
          ]
      },
  
      {
          "id": 2,
          "nome": "Montagem e Manutenção",
          "professor": "Roger",
          "dt_realizacao": "25/03/2022",
          "carga_horaria": 40,
          "img_icon": "https://brasiltreinariopardo.com.br/wp-content/uploads/2020/06/montagem-manutencao-computadores-completo.jpg",
          "conteudo": [
              "Introdução ao Computador",
              "Montagem de Peças",
              "Manutenção de Peças"
          ]  
      },
  
      {
          "id": 3,
          "nome": "Software",
          "professor": "Larissa",
          "dt_realizacao": "25/03/2022",
          "carga_horaria": 60,
          "img_icon": "https://imgs.jusbr.com/publications/images/0fbaf374173d2ac038a4913a1017479a",
          "conteudo": [
              "Introdução",
              "Metodologia",
              "Implementação"
          ]  
      },
  
      {
          "id": 4,
          "nome": "Linux",
          "professor": "Vitor",
          "dt_realizacao": "25/03/2022",
          "carga_horaria": 40,
          "img_icon": "https://t2.tudocdn.net/606607?w=1200&h=1200",
          "conteudo": [
              "Introdução ao Linux",
              "Terminal",
              "Metodos de Navegação"
          ]  
      },
  
      {
          "id": 5,
          "nome": "Windows",
          "professor": "Vitor",
          "dt_realizacao": "23/07/2022",
          "carga_horaria": 40,
          "img_icon": "https://blogs.windows.com/wp-content/uploads/prod/2020/08/windows-logo-social.png",
          "conteudo": [
              "Introdução ao Windows",
              "Metodos de Navegação",
              "Prompt Comando"
          ]  
      },
  
      {
          "id": 6,
          "nome": "Hardware",
          "professor": "Roger",
          "dt_realizacao": "25/05/2022",
          "carga_horaria": 40,
          "img_icon": "https://i.pinimg.com/originals/08/de/31/08de31d4138d93f3f045a89a041aa5fc.jpg",
          "conteudo": [
              "Introdução",
              "Arquitetura de Peças"
          ]  
      },
  
      {
          "id": 7,
          "nome": "Python",
          "professor": "Larissa",
          "dt_realizacao": "28/04/2022",
          "carga_horaria": 60,
          "img_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
          "conteudo": [
              "Introdução",
              "Variaveis",
              "Estrutura de Seleção",
              "Repetição",
              "Orientada a Objetos"
          ]  
      },
  
      {
          "id": 8,
          "nome": "Java",
          "professor": "Larissa",
          "dt_realizacao": "15/09/2022",
          "carga_horaria": 60,
          "img_icon": "https://www.stickersdevs.com.br/wp-content/uploads/2022/01/java-adesivo-sticker.png",
          "conteudo": [
              "Introdução",
              "Variaveis",
              "Estrutura de Seleção",
              "Repetição",
              "Orientada a Objetos"
          ]  
      }
  
    ];

}



ionViewDidEnter(){
  console.log('ionViewDidEnter HomePage');
}

openPageSobre(curso) {
    this.navCtrl.push('SobrePage', {'key': curso});
  }

}