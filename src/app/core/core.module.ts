import { NgModule } from '@angular/core';
import { Optional, SkipSelf } from '@angular/core';
import { PostsService } from './services/posts.service';

@NgModule({
  imports: [
  ],
  providers: [
    PostsService
  ],
  declarations: []
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}