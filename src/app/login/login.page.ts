import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AutenticacaoService } from '../services/autenticacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credenciais: FormGroup;

  constructor(private fb: FormBuilder, 
    private loadingController: LoadingController, 
    private alertController: AlertController, 
    private autenticacaoService: AutenticacaoService,
    private rota: Router) { 

    }

    get email() {
      return this.credenciais.get('email');
    }

    get senha() {
      return this.credenciais.get('senha');
    }

  ngOnInit() {
    this.credenciais = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async registrar() { 
    const loading = await this.alertController.create();
    await loading.present();

    const usuario = await this.autenticacaoService.registrar(this.credenciais.value);
    await loading.dismiss();

    if(usuario){
      this.rota.navigateByUrl('tabs/tab1', {replaceUrl: true}); //Aqui ele coloca todo o link de novo pra página da Url, pra não dar problema de não acessar a página.
    } else {
      this.mostrarAlerta('Seu registro deu errado.', 'Por favor, tente de novo.');
    }
  }

  async login() {
    const loading = await this.alertController.create();
    await loading.present();

    const usuario = await this.autenticacaoService.login(this.credenciais.value);
    await loading.dismiss();

    if(usuario){
      this.rota.navigateByUrl('tabs/tab1', {replaceUrl: true}); //Aqui ele coloca todo o link de novo pra página da Url, pra não dar problema de não acessar a página.
    } else {
      this.mostrarAlerta('Seu login deu errado.', 'Por favor, tente de novo.');
    }

  }

  async mostrarAlerta(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Ok'],
    });
    await alert.present();
  }
}
