import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detalhe-jogos',
  templateUrl: './detalhe-jogos.page.html',
  styleUrls: ['./detalhe-jogos.page.scss'],
})
export class DetalheJogosPage implements OnInit {

  constructor(private apiservice: ApiService, private rota: ActivatedRoute) {   }

  ngOnInit() {
    const id = this.rota.snapshot.paramMap.get('id');
    this.apiservice.getGameDetail(id).subscribe((res) => {
      console.log(res);
    })
  }

}
