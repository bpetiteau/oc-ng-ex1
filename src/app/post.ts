export class Post {
  title: string;
  content: string;
  loveIts: number;
  dontLoveIts: number;
  created_at: Date;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.dontLoveIts = 0;
    this.created_at = new Date();
  }
}
