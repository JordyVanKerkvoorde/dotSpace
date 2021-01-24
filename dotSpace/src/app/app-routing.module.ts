import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { MoonCapsuleComponent } from './moon-capsule/moon-capsule.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'mooncapsule', component: MoonCapsuleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'landing', component: LandingComponent },

  { path: '', component: LandingComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
