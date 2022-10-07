import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { ChildPaginationComponent } from './child-pagination/child-pagination.component';
@NgModule({
  declarations: [
    PaginationComponent,
        AppComponent,
        ChildPaginationComponent  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
