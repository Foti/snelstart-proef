import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { InvoicePageComponent } from './components/invoice-page/invoice-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainHeaderComponent,
    InvoicePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
