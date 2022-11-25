import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService, ResultadoApi } from '../services/api.service';

@Component({
  selector: 'app-detalhe-jogos',
  templateUrl: './detalhe-jogos.page.html',
  styleUrls: ['./detalhe-jogos.page.scss'],
})
export class DetalheJogosPage implements OnInit {

  constructor(private apiservice: ApiService, private rota: ActivatedRoute) {   }

  jogo = null;

  ngOnInit() {
    const id = this.rota.snapshot.paramMap.get('id');
    this.apiservice.getGameDetail(id).subscribe((res) => {
      console.log(res);
      this.jogo = res;
    })
  }

  paginaJogo() {
    window.open(this.jogo.freetogame_profile_url);
  }


}
