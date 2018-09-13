export class Post {
  loveIts: number;
  created_at: Date;
  id: number;

  constructor(public title: string, public content: string, id?:number) {
    this.loveIts = 0;
    this.created_at = new Date();
    this.id = id ? id : 0;
  }
}
