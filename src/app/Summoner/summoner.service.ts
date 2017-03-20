import 'rxjs/add/operator/map';
import { Summoner } from './summoner';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SummonerService {
    private baseUrl: string = "https://na.api.pvp.net";
    private api_key: string = "RGAPI-1c555cbb-b93a-4ef2-acc7-e65643ce1694";

    constructor(private http: Http) { }

    getSummonerByName() {

    }
    getSummoner(summonerName: string): Observable<Summoner> {
        return this.http.get(`${this.baseUrl}/api/lol/na/v1.4/summoner/by-name/${summonerName}?api_key=${this.api_key}`)
            .map((response: Response) => <Summoner>response.json());
    }

    getSummonerStats(summonerId: number): Observable<Summoner> {
        return this.http.get(`https://na.api.pvp.net/championmastery/location/NA1/player/20427098/champions?api_key=RGAPI-1c555cbb-b93a-4ef2-acc7-e65643ce1694`)
            .map((response: Response) => <Summoner>response.json());
    }
}

