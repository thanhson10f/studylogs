import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'post-details-content',
  templateUrl: './post-details-content.component.html',
  styleUrls: ['./post-details-content.component.css']
})
export class PostDetailsContentComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
