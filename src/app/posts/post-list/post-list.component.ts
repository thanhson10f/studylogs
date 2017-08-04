import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { 
  }

  ngOnInit() {
	this.postService.get_post().subscribe(res => {
	  this.posts = res as Post[];
	}, err => {
	  console.log(err);
	});
  }

}
