import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import { PostsData } from '../models';
 
@Injectable({
   providedIn: 'root',
 })
export class PostsService { 
   baseURL:string="http://localhost:5000/api/";
 
   constructor(private http:HttpClient){
   }
 
   getPosts(date:string): Observable<PostsData> {
        return this.http.get<PostsData>(this.baseURL + 'posts/')
   }
}