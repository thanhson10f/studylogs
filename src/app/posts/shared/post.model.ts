export class Post{
  constructor(
	public id: number,
	public title: string,
	public description: string,
	public body: string,
	public postedAt: Date){}
}

export class PostDetails{
  constructor(
	public id: number,
	public title: string,
	public body: string,
	public author: string){}
}
