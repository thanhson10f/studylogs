import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [PostService]
})
export class PostDetailsComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService,
			 private route: ActivatedRoute) { }

  ngOnInit() {
	this.route.params.switchMap((params: Params) => {
	  let id = params['id'];
	  return this.postService.get_post_by_id(+id);
	}).subscribe(res => {
	  this.post = res as Post;
	  //console.log(this.post);
	}, err => {
	  console.log(err);
	});
  }

}
