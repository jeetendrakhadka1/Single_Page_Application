import { MatchHistoryComponent } from './Match/match-history.component';
import { SummonerProfileComponent } from './Summoner/summoner-profile.component';
import { SummonerSearchComponent } from './Summoner/summoner-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'summoner-search', component: SummonerSearchComponent },
  { path: 'summoner-profile', component: SummonerProfileComponent },
  { path: 'summoner-profile/:id', component: SummonerProfileComponent },
  { path: 'match-history', component: MatchHistoryComponent },
  { path: 'match-history/:id', component: MatchHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
