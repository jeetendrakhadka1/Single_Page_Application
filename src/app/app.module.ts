import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchHistoryComponent } from './Match/match-history.component';
import { MatchHistoryService } from './Match/match-history.service';
import { SummonerProfileComponent } from './Summoner/summoner-profile.component';
import { SummonerSearchComponent } from './Summoner/summoner-search.component';
import { SummonerService } from './Summoner/summoner.service';
import { TestRouteComponent } from './test-route.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
  ],
  declarations: [
    AppComponent,
    TestRouteComponent,
    MatchHistoryComponent,
    SummonerSearchComponent,
    SummonerProfileComponent
  ],
  providers: [SummonerService, MatchHistoryService, SummonerSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
