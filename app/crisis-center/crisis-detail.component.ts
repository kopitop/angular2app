import { Component, Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { OnInit, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../animations';

import { Crisis } from './crisis.service';

import { CrisisService } from './crisis.service';

@Component({
  selector: 'my-crisis-detail',
  template: `
    <div *ngIf="crisis">
      <h2>{{crisis.name}} details!</h2>
      <div>
        <label>id: </label>{{crisis.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="crisis.name" placeholder="name"/>
      </div>
      <p>
      <button (click)="gotoCrises()">Back</button>
    </p>
    </div>
  `,
  animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @Input() crisis: Crisis;

  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private service: CrisisService
) {}

ngOnInit() {
  this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getCrisis(+params['id']))
    .subscribe((crisis: Crisis) => this.crisis = crisis);
}

gotoCrises() {
  let crisisId = this.crisis ? this.crisis.id : null;
this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });}

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/