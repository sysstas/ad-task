import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatToolbarModule, MatInputModule, MatListModule, MatCardModule} from '@angular/material'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { AdsComponent } from './ads/ads.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';
//import { AdComponent } from './ad/ad.component';


const routes =  [
  { path: '', component: AdsComponent}, 
  { path: 'create_ad', component: CreateAdComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
 // { path: 'profile/:id', component: ProfileComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AdsComponent,
    CreateAdComponent,
    RegisterComponent,
    LoginComponent,
    //AdComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule, 
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
