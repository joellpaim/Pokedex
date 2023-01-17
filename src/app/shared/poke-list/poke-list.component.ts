import { PokeApiService } from './../../service/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(private pokeapiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeapiService.apiListAllPokemons.subscribe((res) => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
