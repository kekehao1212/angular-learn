import { Component, OnInit , Input, OnDestroy} from '@angular/core';
import { Hero } from '../types/hero';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Location } from '@angular/common';
import { Observable, Subject, interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero$: Observable<Hero>;
  subscription: Subscription;
  back(): void {
    // this.router.navigate(['/heroes']);
    this.location.back();
  }

  save($event): void {
    console.log(this.hero$);
    // this.heroService.updateHero(this.hero$)
    //   .subscribe(() => this.goBack());
  }

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) { }
    // Activated Route in action
  ngOnInit() {
    this.subscription = interval(3000).subscribe(x => console.log(x));
    // this.router.events.subscribe(e => console.log('router event', e));
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.hero$ = this.heroService.getHero(id);
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.heroService.getHero(+params.get('id')))
    );
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
