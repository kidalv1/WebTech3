import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Overtreding } from '../model/Overtreding';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  overtredingen: Overtreding[] = [];
  pokurl: string = 'http://localhost:4200/assets/pokemon.json';

  constructor(private http: HttpClient) { 
    this.loadPokemonFromJson().subscribe();
  }

  loadPokemonFromJson(): Observable<any> {
    console.log(1, 'load from json is called');
    console.log(2, 'response: ' +  this.http.get('overtredingen.json') );
      return this.http.get<any[]>(this.pokurl);
  }

  
  findPokemons(opnameplaats_straat: string, aantal_overtredingen_snelheide2: number): Overtreding[] {

    let gevondenOvertredingen: Overtreding[] = [];

    for (let i = 0; i < this.overtredingen.length; i++) {
      if (this.overtredingen[i].opnameplaats_straat == opnameplaats_straat && this.overtredingen[i].aantal_overtredingen_snelheid == aantal_overtredingen_snelheide2) {

        gevondenOvertredingen.push(this.overtredingen[i]);
      } else {
        console.log(5, 'geen pokemon gevonden');
      }
    }

    localStorage.setItem('', JSON.stringify(gevondenOvertredingen));

    return gevondenOvertredingen;
  }
}
