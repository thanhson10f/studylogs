import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor() { 
  
	this.posts = [
	  new Post("123","title 1", "content 1")
	];
  }

  ngOnInit() {
  }

}
