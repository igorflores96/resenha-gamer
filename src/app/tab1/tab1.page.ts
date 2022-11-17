import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService, ResultadoApi } from '../service/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  jogos: ResultadoApi[];

  constructor(private apiService: ApiService, private loadingCtrl: LoadingController) {
    this.jogos = []
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
      this.jogos = [...this.jogos, res];
      console.log(this.jogos);
      console.log(res);
    });
  }
}
