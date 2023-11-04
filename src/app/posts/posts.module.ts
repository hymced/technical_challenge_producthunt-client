import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';

import { PostsListComponent } from './pages';
import { PostComponent } from './components/post/post.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    PostsRoutingModule,
    SharedModule,

    DatepickerComponent
  ],
  providers: [
  ],
  declarations: [
    PostsListComponent,
    PostComponent,
  ]
})
export class PostsModule {}