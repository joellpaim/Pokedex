import { PokeApiService } from './../../service/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;

  constructor(private pokeapiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeapiService.apiListAllPokemons.subscribe((res) => {
      this.getAllPokemons = res.results;
      //console.log(res);
    });
  }
}
