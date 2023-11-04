import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';

import { PostsListComponent } from './pages';
import { PostComponent } from './components/post/post.component';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    PostsRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  declarations: [
    PostsListComponent,
    PostComponent
  ]
})
export class PostsModule { }