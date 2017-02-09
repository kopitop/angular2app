import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
const appRoutes: Routes = [
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  {
  path: 'compose',
  component: ComposeMessageComponent,
  outlet: 'popup'
},
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}