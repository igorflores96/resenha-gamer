import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/Auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private auth: Auth) { }

  async registrar({email, senha}) {
    try {
      const usuario = await createUserWithEmailAndPassword(this.auth, email, senha);
      return usuario;
    } catch (e) {
      return null;
    }
  }

  async login({email, senha}) {
    try {
      const usuario = await signInWithEmailAndPassword(this.auth, email, senha);
      return usuario;
    } catch (e) {
      return null;
    }
  }

  logout() { 
    return signOut(this.auth);
  }
}
