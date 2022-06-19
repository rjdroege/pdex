import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavPokemonComponent } from './fav-pokemon/fav-pokemon.component';
import { HomeComponent } from './home/home.component';
import { PdexComponent } from './pdex/pdex.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'pdex', component: PdexComponent},
  { path: 'poke-favs', component:FavPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
