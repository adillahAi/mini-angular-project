import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './features/profile/profile.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'redirect', redirectTo: 'dashboard', pathMatch: 'full' }, // if 'redirect' is written in the URL navigate to DashboardComponent
  { path: '**', redirectTo: 'profile' } // if an unknown route is typed redirect to ProfileComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
