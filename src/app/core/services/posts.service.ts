import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import { PostsData } from '../models';

import { environment } from "src/environments/environment";
 
@Injectable({
   providedIn: 'root',
 })
export class PostsService { 

   // baseURL:string="https://technical-challenge-producthunt.adaptable.app/api/";
   baseURL:string=environment.API_URL || "http://localhost:5000/api/";

   constructor(private http:HttpClient) {
      console.log(this.baseURL)
   };

   getPosts(date:string): Observable<PostsData> {
      const params = new HttpParams().set('date', date);
      return this.http.get<PostsData>(this.baseURL + 'posts/', { params });
   }
}