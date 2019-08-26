import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Overtreding } from 'src/app/model/Overtreding';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
})
export class AllPokemonComponent implements OnInit {

  overtredingen: Overtreding[];
  constructor(private pokemonServ: PokemonService) { }

  ngOnInit() {
    this.getAllpoks();
  }

  getAllpoks() {
    this.pokemonServ.loadPokemonFromJson().subscribe(data =>{
      this.overtredingen = data["docs"];
    })
  }
}
