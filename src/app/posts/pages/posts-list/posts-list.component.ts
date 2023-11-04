import { Component } from '@angular/core';

import { PostsService } from '../../../core';
import { PostsData } from '../../../core';

@Component({
  templateUrl: './posts-list.component.html',
})
export class PostsListComponent {

  date: string ="2023-10-30T00:00:00Z";
  postsData: PostsData | null;

  loading: boolean=false;
  errorMessage: any;

  constructor(private postsService: PostsService) {}

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