import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { NamesComponent } from './Components/names/names.component';
import { ResultsComponent } from './Components/results/results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'names', component: NamesComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
