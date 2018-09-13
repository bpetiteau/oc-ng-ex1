import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIt(): void {
    this.post.loveIts++;
    this.postsService.savePostsToServer();
    this.postsService.emitPostsSubject();
  }

  onDontLoveIt(): void {
    this.post.loveIts--;
    this.postsService.savePostsToServer();
    this.postsService.emitPostsSubject();
  }

  onRemove(): void {
    this.postsService.removePost(this.index);
  }
}
