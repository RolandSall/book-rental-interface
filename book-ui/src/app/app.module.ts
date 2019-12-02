import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookService} from "./services/book.service";
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {ViewRegistrationComponent} from "./components/view-registration/view-registration.component";



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ViewRegistrationComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BookService],
  exports: [
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
