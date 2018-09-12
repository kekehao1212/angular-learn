import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownParentComponent } from '../components/count-down-parent/count-down-parent.component';
import { PageNotFoundComponent } from '../components/PageNotFound/PageNotFound.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'countDown', component: CountDownParentComponent},
  { path : '**', component: PageNotFoundComponent}
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes, {enableTracing: true})
   ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
