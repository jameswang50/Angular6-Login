import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptorServiceProvider } from './_helpers/jwt-interceptor.service';
import { ErrorInterceptorServiceProvider } from './_helpers/error-interceptor.service';
import { AuthGuard } from './_guards/auth.guard';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    JwtInterceptorServiceProvider,
    ErrorInterceptorServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
