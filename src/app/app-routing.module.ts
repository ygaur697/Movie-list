import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {path:'',component:MovieListComponent},
  { path: 'Trending', component: TrendingComponent },
  { path: 'movie', component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
