import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JokeListComponent } from './joke-list/joke-list.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'jokes-list',
        component: JokeListComponent
      }
    ]
  },
];
