import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Character {
  id: string;
  name: string;
  house: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('https://hp-api.onrender.com/api/characters');
  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get(`https://hp-api.onrender.com/api/character/${id}`);
  }

  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`https://hp-api.onrender.com/api/characters/house/${house}`);
  }
}
