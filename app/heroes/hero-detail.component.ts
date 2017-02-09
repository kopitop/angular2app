import { Component, Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { OnInit, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../animations';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
    </div>
  `,
  animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @Input() hero: Hero;

  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private service: HeroService
) {}

ngOnInit() {
  this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getHero(+params['id']))
    .subscribe((hero: Hero) => this.hero = hero);
}

gotoHeroes() {
  let heroId = this.hero ? this.hero.id : null;
  this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
}

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/