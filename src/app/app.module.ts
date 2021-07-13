
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent, DialogContentExampleDialog} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-mod';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { WidgetPageComponent } from './widget-page/widget-page.component';
import { AddWidgetsComponent } from './add-widgets/add-widgets.component';
import { WidgetServiceService } from './services/widget-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetPageComponent,
    AddWidgetsComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogContentExampleDialog
  ],
  providers: [WidgetServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
