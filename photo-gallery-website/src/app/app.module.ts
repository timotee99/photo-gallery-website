import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/material.module';
import { HeaderComponent } from './components/navigation/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { PriceComponent } from './components/price/price.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent,
    SidenavListComponent,
    ContactComponent,
    PriceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    Angular2ImageGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
