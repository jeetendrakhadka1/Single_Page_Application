import 'rxjs/add/operator/map';
import { Champion } from '../Match/champion';
import { MatchHistoryRootObject } from '../Match/match-history';
import { MatchHistoryService } from '../Match/match-history.service';
import { Summoner } from './summoner';
import { SummonerService } from './summoner.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'summoner-profile',
  templateUrl: 'summoner-profile.component.html',
  styleUrls: ['summoner-profile.component.css']
})
export class SummonerProfileComponent implements OnInit {
  private sub: any;
  private assists: number[] = [];
  private champion: Champion
  private championName: string[] = [];
  private championNameParsed: string[] = [];
  private champsKilled: number[] = [];
  private counter: number;
  private goldEarned: number[] =[];
  private ipEarned: number[] = [];
  private item0: number[] = [];
  private item1: number[] = [];
  private item2: number[] = [];
  private item3: number[] = [];
  private item4: number[] = [];
  private item5: number[] = [];
  private item6: number[] = [];
  private match: MatchHistoryRootObject;
  private matchResult: string;
  private minionsKilled: number[] = [];
  private numDeaths: number[] = [];
  private summoner: Summoner;
  private summonerId: number;
  private summonerName: string;
  private summonerNameParsed: string;
  private sumName: string;
  private totalPlayerScore: number[] = [];
  private win: string[] = [];

  constructor(private summonerService: SummonerService, private matchService: MatchHistoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.summonerName = params['id'];
    });
    this.receiveSummoner(this.summonerName);
  }

  getSummonerName(summonerName: string) {
    this.summonerName = summonerName;
  }

  receiveSummoner(summonerName: string) {
    this.summoner = {
      id: 1,
      name: "user",
      profileIconId: 1,
      revisionDate: 1,
      summonerLevel: 1
    };
    let count = 0;

    this.summonerService.getSummoner(summonerName)
      .subscribe((response: any) => {
        this.summoner = response;
        let t;
        for (var i in this.summoner) {
          for (var j in this.summoner[i]) {
            count++;
            t = this.summoner[i][j];
            if (count == 1) {
              this.summoner.id = t;
              this.summonerId = t;
            }
            if (count == 2) {
              this.summoner.name = t;
              this.sumName = t;
            }
            if (count == 3) {
              this.summoner.profileIconId = t;
            }
            if (count == 4) {
              this.summoner.revisionDate = t;
            }
            if (count == 5) {
              this.summoner.summonerLevel = t;
            }
          }
        }
        this.receiveMatch(this.summonerId);
      });
  }

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
                if (l == "minionsKilled") {
                  this.minionsKilled[j] = t;
                }
                if (l == "totalPlayerScore") {
                  this.totalPlayerScore[j] = t;
                }
                if(l == "goldEarned"){
                  this.goldEarned[j] = t;
                }
                if(l =="item0"){
                  this.item0[j] = t;
                }
                if(l =="item1"){
                  this.item1[j] = t;
                }
                if(l =="item2"){
                  this.item2[j] = t;
                }
                if(l =="item3"){
                  this.item3[j] = t;
                }
                if(l =="item4"){
                  this.item4[j] = t;
                }
                if(l =="item5"){
                  this.item5[j] = t;
                }
                if(l =="item6"){
                  this.item6[j] = t;
                }
              }
            }
          }
        }
        let responseString = JSON.stringify(response);
      });
  }

  getChampion(championId: number, iteration: number) {
    this.matchService.getChampionNameById(championId)
      .subscribe((response: any) => {
        this.champion = response;
        let t;
        this.championName[iteration] = this.champion.name

        var desired = this.champion.name.replace(/[^\w\s]/gi, '')
        var fields = desired.split(' ');

        if (fields[1] == undefined) {
          this.championNameParsed[iteration] = fields[0];
        }

        else {
          this.championNameParsed[iteration] = fields[0] + fields[1];
          if (this.championNameParsed[iteration] == "KhaZix") {
            this.championNameParsed[iteration] = "Khazix";
          }
        }
      });
  }

}
