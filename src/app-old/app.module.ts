import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './pages/page-test.component';
import { Test1Component } from './components-test/test-1/test-1.component';
import { CounterComponent } from './components-test/counter/counter.component';

import { HomeComponent } from './pages/page-home.component';

import { PostsComponent } from './pages/page-posts.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

import { NavBarComponent } from './components/navbar/navbar.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    TestComponent,
    Test1Component,
    CounterComponent,

    HomeComponent,

    PostsComponent,
    PostsListComponent,

    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
