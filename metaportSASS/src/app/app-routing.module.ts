import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { WebComponent } from './Views/web/web.component';
import { GamesComponent } from './Views/games/games.component';
import { VRComponent } from './Views/vr/vr.component';
import { AboutComponent } from './Views/about/about.component';
const routes: Routes = [ {path: "", component:HomeComponent},

{path: 'web', component:WebComponent},
{path: "games", component:GamesComponent},
{path: "vr", component:VRComponent},
{path: "about", component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
