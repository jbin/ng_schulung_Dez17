import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { Route } from '@angular/router';

const routes: Route[] = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductModule, MatToolbarModule, MatIconModule,MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
