import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
	this.createForm();
  }

  createForm(){
	this.postForm = this.formBuilder.group({
	  title: ['', Validators.required],
	  tag: '',
	  body: ''
	});
  }

}
