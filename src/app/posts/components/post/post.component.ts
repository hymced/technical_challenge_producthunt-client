import { Component } from '@angular/core';
import { Input } from  '@angular/core';

import { PostsData } from '../../../core';

type Post = PostsData["posts"]["edges"][number]["node"]
type PostSimple = Partial<Post>

@Component({
  selector: 'tr[app-component-post]',
  templateUrl: './post.component.html',
})
export class PostComponent
{
  @Input() post: PostSimple = {
    id: "",
    name: ""
  };

  constructor() {}

}