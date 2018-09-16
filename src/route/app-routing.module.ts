import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownParentComponent } from '../components/count-down-parent/count-down-parent.component';
import { PageNotFoundComponent } from '../components/PageNotFound/PageNotFound.component';
import { PopupComponent } from '../components/popup/popup.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path : 'crisis-center', loadChildren: '../components/crisis-center/crisis-center.module#CrisisCenterModule' },
  { path: 'countDown', component: CountDownParentComponent},
  { path: 'popup', component: PopupComponent, outlet: 'popup'},
  { path : '**', component: PageNotFoundComponent}
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes, {enableTracing: true})
   ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
