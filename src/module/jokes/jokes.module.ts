import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/core/core.module';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';
import { JokeService } from './services/joke.service';
import { routes } from './jokes.routing';
import { JokeListComponent } from './joke-list/joke-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AppComponent,
    JokeListComponent,
    DashboardComponent
  ],
  providers: [JokeService]
})
export class JokesModule { }
