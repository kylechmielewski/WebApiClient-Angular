import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    InternalServerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'Home', component: HomeComponent },
      //the owner module with its components won’t be loaded until we explicitly ask for them. By doing this, we are configuring Angular lazy loading from the owner module content
      { path: 'Owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule)},
      { path: '404', component: NotFoundComponent },
      { path: '500', component: InternalServerComponent },
      { path: '', redirectTo: '/Home', pathMatch: 'full' },

      //whenever you search for any route that doesn’t match any of our defined routes, the application redirects you to the 404 page
      { path: '**', redirectTo: '/404', pathMatch: 'full'}
    ])
  ],
  //we should register all the services in the root module. That way components will inject the same instance of the service only once and you can keep the state in your service
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
