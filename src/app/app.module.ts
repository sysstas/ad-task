import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { 
  MatButtonModule, 
  MatCardModule, 
  MatToolbarModule, 
  MatInputModule, 
  MatListModule } from '@angular/material'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';
import { AuthService } from './auth.service';
import { PostComponent } from './post.component';


const routes =  [
  { path: '', component: PostComponent}, 
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent},
  { path: 'profile/:id', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    MessagesComponent, 
    RegisterComponent, 
    LoginComponent, 
    UsersComponent, 
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    FormsModule,
    MatButtonModule, 
    MatCardModule, 
    MatToolbarModule, 
    RouterModule.forRoot(routes),
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
