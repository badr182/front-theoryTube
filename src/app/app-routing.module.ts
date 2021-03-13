import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './services/auth.guard';
import { UploadComponent } from './upload/upload.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "login", component:LoginComponent },
  { path: "registration", component:RegistrationComponent },
  { path: "user", component:UserComponent, canActivate:[AuthGuard] },
  { path: "upload", component:UploadComponent, canActivate:[AuthGuard] },

  // not found 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
