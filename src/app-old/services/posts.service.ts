import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'http://localhost:5000/api/posts/';

  constructor() {
    
  }

  requestBody = {
    date: new Date()
  }

  requestOptions = {
    method: 'GET',
    // body: JSON.stringify(this.requestBody)
  };

  async getPosts(requestBody?: typeof this.requestBody): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, this.requestOptions);
      const postsData = await response.json();
      const { posts } = postsData;
      return posts;
    } catch (error) {
      console.log(error)
    }
  }
}