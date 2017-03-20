import { Summoner } from '../Summoner/summoner';
import { Champion } from './champion';
import 'rxjs/add/operator/map';
import { Game, MatchHistoryRootObject, Stats } from './match-history';
import { MatchHistoryService } from './match-history.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {
  /*
  summonerId: number;
  sub: any;
  match: MatchHistoryRootObject;
  champion: Champion;
  ipEarned: number[] = [];
  champsKilled: number[] = [];
  numDeaths: number[] = [];
  assists: number[] = [];
  championName: string[] = [];
  win: string [] = [];
  matchResult: string;
  tableRows: number;
  constructor(private matchService: MatchHistoryService, private route: ActivatedRoute) { }
*/
  ngOnInit() {
    /*
    this.sub = this.route.params.subscribe(params => {
      this.summonerId = +params['id'];
    });

    this.receiveMatch(this.summonerId);
    */
  }
  /*
  receiveMatch(summonerId: number) {
    this.matchService.getMatchHistoryById(summonerId)
      .subscribe((response: any) => {
        this.match = response;
        let t;
        let property;
        let count = 0;
        for (var i in this.match) {
          t = this.match[i];
          for (var j in this.match[i]) {
            t = this.match[i][j];
            this.tableRows = +j;
            this.tableRows++;
            for (var k in this.match[i][j]) {
              t = this.match[i][j][k];
              if (k == "ipEarned") {
                this.ipEarned[j] = t;
              }
              if (k == "championId") {
                var convertedNumber = +j;

                this.getChampion(t, convertedNumber);
              }
              for (var l in this.match[i][j][k]) {
                t = this.match[i][j][k][l];
                if (l == "win") {
                  if (t == true) {
                    this.win[j] = "Victory";
                  }
                  else {
                    this.win[j] = "Defeat";
                  }
                }

                if (l == "championsKilled") {
                  this.champsKilled[j] = t;
                }
                if (l == "numDeaths") {
                  this.numDeaths[j] = t;
                }
                if (l == "assists") {
                  this.assists[j] = t;
                }
              }
            }
          }
        }
        let responseString = JSON.stringify(response);
        console.log(response)
      });
  }

  getChampion(championId: number, iteration: number) {

    this.matchService.getChampionNameById(championId)
      .subscribe((response: any) => {
        this.champion = response;
        let t;
        this.championName[iteration] = this.champion.name
      });
  }
}




*/
}