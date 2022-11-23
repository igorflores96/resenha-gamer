import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheJogosPage } from './detalhe-jogos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheJogosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheJogosPageRoutingModule {}
