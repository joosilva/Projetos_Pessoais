import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RepertorioComponent } from './components/repertorio/repertorio.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "repertorio", component: RepertorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
