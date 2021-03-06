import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AdminModule }             from './admin/admin.module';
import { HeroesModule }     from './heroes/heroes.module';
import { CrisesModule } from './crisis-center/crises.module';
import { PageNotFoundComponent } from './not-found.component';

import { LoginRoutingModule }      from './login-routing.module';
import { LoginComponent }          from './login.component';

import { ComposeMessageComponent } from './compose-message.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HeroesModule,
                  CrisesModule,
                  AdminModule,
                  LoginRoutingModule,
                  AppRoutingModule,
                ],
  declarations: [ AppComponent,
                  PageNotFoundComponent,
                  LoginComponent,
                  ComposeMessageComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
