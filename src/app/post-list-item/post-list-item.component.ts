import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  getColor(): string {
    if (this.post.loveIts > this.post.dontLoveIts) return 'green';
    else if (this.post.loveIts < this.post.dontLoveIts) return 'red';
    else return 'black';
  }

  onLoveIt(): void {
    this.post.loveIts++;
  }

  onDontLoveIt(): void {
    this.post.dontLoveIts++;
  }
}
