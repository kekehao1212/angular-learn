import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './components/app/app.component';
import { MessageComponent } from './components/message/message.component';
import { AppRoutingModule } from './route/app-routing.module';
import { InMemoryDataService } from './core/services/in-memory-data/in-memory-data.service';
import { CountDownParentComponent } from './components/count-down-parent/count-down-parent.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { PageNotFoundComponent } from './components/PageNotFound/PageNotFound.component';
import { HeroesModule } from './module/heroes/heroes.module';
import { PopupComponent } from './components/popup/popup.component';
import { Router } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    CountDownParentComponent,
    CountdownTimerComponent,
    PageNotFoundComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HeroesModule,
    // CrisisCenterModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
