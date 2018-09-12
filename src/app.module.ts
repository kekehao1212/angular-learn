import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './components/app/app.component';
import { MessageComponent } from './components/message/message.component';
import { AppRoutingModule } from './route/app-routing.module';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MessageService } from './services/message.service';
import { CountDownParentComponent } from './components/count-down-parent/count-down-parent.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/Unless.directive';
import { PageNotFoundComponent } from './components/PageNotFound/PageNotFound.component';
import { HeroesModule } from './components/heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    CountDownParentComponent,
    CountdownTimerComponent,
    HighlightDirective,
    UnlessDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
