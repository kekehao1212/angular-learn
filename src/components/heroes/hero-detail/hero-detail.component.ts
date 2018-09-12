import { Component, OnInit , Input} from '@angular/core';
import { Hero } from '../types/hero';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  goBack(): void {
    this.location.back();
  }

  save($event): void {
    console.log($event);
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);

  }
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) { }
    // Activated Route in action
  ngOnInit() {
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     this.heroService.getHero(params.get('id'));
    //   })
    // );
    this.getHero();
  }

}
