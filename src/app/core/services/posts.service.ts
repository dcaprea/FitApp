import { Injectable } from '@angular/core';
import { PostModel } from '../models/posts.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<PostModel>{
    return this.httpClient.get<PostModel>('http://localhost:3000/posts')
  }
}
