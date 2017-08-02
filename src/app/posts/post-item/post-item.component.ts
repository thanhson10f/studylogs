import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @HostBinding('attr.class') cssClass='item';
  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
