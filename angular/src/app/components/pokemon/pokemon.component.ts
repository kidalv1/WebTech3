import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import {DatePipe} from '@angular/common';
import { Overtreding } from 'src/app/model/Overtreding';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {

  opnameplaats_straat: string;
  aantal_overtredingen_snelheid: number;
  gevondeOvertredingen: Overtreding[];
  found: boolean = false;

  constructor(private pokemonServ : PokemonService, private datePipe: DatePipe) {}

  ngOnInit() {
  }

  findPokemon(opnameplaats_straat,aantal_overtredingen_snelheid){
    this.opnameplaats_straat = opnameplaats_straat;
    this.aantal_overtredingen_snelheid = aantal_overtredingen_snelheid;
 
    console.log(5, ' ' + this.opnameplaats_straat + ' - ' + this.aantal_overtredingen_snelheid);

    this.gevondeOvertredingen = this.pokemonServ.findPokemons(this.opnameplaats_straat, this.aantal_overtredingen_snelheid);
    if(this.gevondeOvertredingen.length > 0){
      this.found = true;
    }
  }

}
