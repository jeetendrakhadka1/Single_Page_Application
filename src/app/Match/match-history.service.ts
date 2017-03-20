import 'rxjs/add/operator/map';
import { Champion } from './champion';
import { MatchHistoryRootObject } from './match-history';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MatchHistoryService {
    private baseUrl: string = "https://na.api.pvp.net";
    private api_key: string = "RGAPI-cc6e3c6a-db06-4fa0-8f5b-f4efa7e823cf";

    constructor(private http: Http) { }

    getMatchHistoryById(summonerId: number): Observable<MatchHistoryRootObject> {        
        return this.http.get(`https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/${summonerId}/recent?api_key=RGAPI-1c555cbb-b93a-4ef2-acc7-e65643ce1694`)
            .map((response: Response) => <MatchHistoryRootObject>response.json());
    }

    getChampionNameById(championId: number): Observable<Champion>{
        return this.http.get(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/${championId}?api_key=RGAPI-1c555cbb-b93a-4ef2-acc7-e65643ce1694`)
        
            .map((response: Response) => <Champion>response.json());
    }
}