import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomComponent } from './main/top/bottom/bottom.component';
import { MiddleComponent } from './main/top/middle/middle.component';
import { TopComponent } from './main/top/top/top.component';

const routes: Routes = [
  {path:'top', component: TopComponent},
  {path:'middle', component: MiddleComponent},
  {path:'bottom', component: BottomComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
