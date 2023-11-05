import { Component } from '@angular/core';

import { PostsService } from '../../../core';
import { PostsData } from '../../../core';

@Component({
  templateUrl: './posts-list.component.html',
})
export class PostsListComponent {

  date: string = (new Date()).toISOString();
  postsData: PostsData | null;

  loading: boolean=false;
  errorMessage: any;

  constructor(private postsService: PostsService) {
    this.callback = this.callback.bind(this);
  }

  callback(date: Date) {
    this.date = date.toISOString();
    this.getPosts();
  }

  public getPosts() {
    this.loading=true;
    this.postsData=null;
    this.errorMessage="";
    this.postsService.getPosts(this.date)
    .subscribe({
      next: (response) => {this.postsData=response;},
      error: (error) => {this.errorMessage=error; this.loading=false;},
      complete: () => {this.loading=false;}
    })
  }
}