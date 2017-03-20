import 'rxjs/add/operator/map';
import { Summoner } from './Summoner/summoner';
import { SummonerService } from './Summoner/summoner.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-route',
  template: `
  <h1>Route works!</h1>
  `
})
export class TestRouteComponent implements OnInit {
  constructor(private summonerService: SummonerService) { }

  @Input()
  summoner: Summoner;
  summoner2: Summoner;
  summonerName: string;
  counter: number;

  ngOnInit() {

  }
}
