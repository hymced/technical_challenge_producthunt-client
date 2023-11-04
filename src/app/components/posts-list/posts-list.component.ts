import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service'

interface Posts {
  totalCount: number;
}

@Component({
  selector: 'app-component-posts-list',
  templateUrl: './posts-list.component.html',
  providers: [PostsService],
})
export class PostsListComponent implements OnInit {

  constructor(private postsService: PostsService) {}

  posts: Posts | null = null;

  ngOnInit() {
    this.fetchPosts()
  }

  async nextPage() {
    this.posts = null;
    this.fetchPosts();
  }

  private async fetchPosts() {
    this.posts = await this.postsService.getPosts()
  }
}