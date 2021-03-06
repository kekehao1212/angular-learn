import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroRoutingModule } from './heroes.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/core/services/in-memory-data/in-memory-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
    SharedModule,
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent
  ],
  providers: [HeroService]
})
export class HeroesModule { }
