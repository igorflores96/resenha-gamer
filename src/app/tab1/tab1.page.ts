import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Logs } from 'selenium-webdriver';
import { ApiService, ResultadoApi } from '../service/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  jogos: any;

  constructor(private apiService: ApiService, private loadingCtrl: LoadingController) {
    this.jogos;
  }

  ngOnInit() {
    this.loadGames();
  }

  async loadGames() {
    console.log("Iniciando await");
    const loading = await this.loadingCtrl.create({
      message: 'Carregando..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.apiService.getGamesList().subscribe((res) => {
      console.log("chegou no dismiss");
      loading.dismiss();
      this.jogos = res;
      console.log(this.jogos);
      console.log(res);
    });
  }
}
