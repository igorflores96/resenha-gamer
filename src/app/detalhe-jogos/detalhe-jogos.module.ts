import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheJogosPageRoutingModule } from './detalhe-jogos-routing.module';

import { DetalheJogosPage } from './detalhe-jogos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheJogosPageRoutingModule
  ],
  declarations: [DetalheJogosPage]
})
export class DetalheJogosPageModule {}
