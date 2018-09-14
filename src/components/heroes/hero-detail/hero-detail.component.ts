import { Component, OnInit , Input} from '@angular/core';
import { Hero } from '../types/hero';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Location } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;
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
    //
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.hero$ = this.heroService.getHero(id);
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.heroService.getHero(+params.get('id')))
    );
  }
}
