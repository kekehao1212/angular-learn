import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CountDownParentComponent } from '../components/count-down-parent/count-down-parent.component';
import { PageNotFoundComponent } from '../components/PageNotFound/PageNotFound.component';
import { PopupComponent } from '../components/popup/popup.component';
import { PreloadStrategy } from './services/preload-stagery/preload-stagery.service';
const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full'},
  { path : 'crisis-center', loadChildren: '../module/crisis-center/crisis-center.module#CrisisCenterModule', data: { preload : true } },
  { path : 'jokes', loadChildren: '../module/jokes/jokes.module#JokesModule', data: {preload: true}},
  { path: 'countDown', component: CountDownParentComponent},
  { path: 'popup', component: PopupComponent, outlet: 'popup'},
  { path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        enableTracing: true,
        preloadingStrategy: PreloadStrategy
      })
   ],
  providers: [PreloadStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule {}
