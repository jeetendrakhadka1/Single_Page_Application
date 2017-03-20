import { Component } from '@angular/core';

@Component({
  selector: 'summoner-search',
  templateUrl: 'summoner-search.html',
  styleUrls: ['summoner-search.css'],
})
export class SummonerSearchComponent {
  summonerName: string;


  getSummonerName(summonerName: string) {
    this.summonerName = summonerName;
  }


}
