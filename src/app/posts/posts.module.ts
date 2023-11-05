import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';

import { PostsListComponent } from './pages';
import { PostComponent } from './components/post/post.component';

import { DatepickerComponent } from './components/datepicker/datepicker.component'; // standalone module

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    PostsRoutingModule,
    SharedModule,

    DatepickerComponent, // standalone module
  ],
  providers: [
  ],
  declarations: [
    PostsListComponent,
    PostComponent,
  ]
})
export class PostsModule {}