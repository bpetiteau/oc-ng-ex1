import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubject = new Subject<Post[]>();
  private posts = [];

  constructor(private httpClient: HttpClient) {
    this.getPostsFromServer();
  }

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string) {
    const id = this.posts.length === 0 ? 0 : (this.posts[(this.posts.length -1)].id + 1);
    const post = new Post(title, content, id);
    this.posts.push(post);
    this.savePostsToServer();
    this.emitPostsSubject();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.savePostsToServer();
    this.emitPostsSubject();
  }

  getPostsFromServer() {
    this.httpClient
      .get<Post[]>('https://oc-ng-tuto.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response ? response : [];
          this.emitPostsSubject();
          console.log('Récupération terminée !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  savePostsToServer() {
    this.httpClient
      .put('https://oc-ng-tuto.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
