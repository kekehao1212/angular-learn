import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { CountDownParentComponent } from '../components/count-down-parent/count-down-parent.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'countDown', component: CountDownParentComponent}
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
