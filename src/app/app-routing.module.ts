import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResumebodyComponent } from './resumebody/resumebody.component';

const routes: Routes = [
  {path:'login',redirectTo:'login',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"resumebody",component:ResumebodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
