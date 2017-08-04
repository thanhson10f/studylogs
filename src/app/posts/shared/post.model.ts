export class Post{
  constructor(
	public id: number,
	public title: string,
	public body: string){}
}

export class PostDetails{
  constructor(
	public id: number,
	public title: string,
	public body: string,
	public author: string){}
}
