import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WidgetPageComponent } from './widget-page/widget-page.component';
import { AddWidgetsComponent } from './add-widgets/add-widgets.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'widgets', component: WidgetPageComponent },
  { path: 'addwidgets', component: AddWidgetsComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
