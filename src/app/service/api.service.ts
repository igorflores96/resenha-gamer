import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface ResultadoApi {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { 

}

  getGamesList(): Observable<ResultadoApi> {
    return this.http.get<ResultadoApi>(`${environment.baseUrl}/api/games?rapidapi-key=${environment.apiKey}`);
  }

  getGameDetail(id: number) {
    return this.http.get(`${environment.baseUrl}/api/game/id=${id.toString()}?rapidapi-key=${environment.apiKey}`);
  }
}