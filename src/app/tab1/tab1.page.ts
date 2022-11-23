import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Logs } from 'selenium-webdriver';
import { ApiService, ResultadoApi } from '../services/api.service';

import _ from 'lodash';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  jogos: ResultadoApi[];
  filtro_jogos: ResultadoApi[];
  texto_consulta: string;

  constructor(private apiService: ApiService, private loadingCtrl: LoadingController, private controle_pagina: NavController) {
    this.texto_consulta = '';
    
  }

  ngOnInit() {
    this.loadGames();
  }

  async loadGames() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando..',
      spinner: 'bubbles',
    });
    await loading.present();

    
    this.apiService.getGamesList().subscribe((res) => {
      loading.dismiss();
      this.jogos = this.filtro_jogos = res;
      console.log(this.jogos);
      console.log(res);
    });
  }

  filtrarJogos(game: any) {
    let val = game.target.value;
    if(val && val.trim() != '') {
      this.jogos = _.values(this.filtro_jogos);
      this.jogos = this.jogos.filter((jogo) => {
        return (jogo.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.jogos = this.filtro_jogos;
    }
  }


  abrePaginaJogo(idJogo: string) {
    this.controle_pagina.navigateForward("/detalhe-jogos/"+idJogo);
  }

}
