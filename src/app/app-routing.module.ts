import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UploadComponent } from './upload/upload.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "login", component:LoginComponent },
  { path: "registration", component:RegistrationComponent },
  { path: "user", component:UserComponent },
  { path: "upload", component:UploadComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
