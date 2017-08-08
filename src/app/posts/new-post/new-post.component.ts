import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

declare let require: any;
var SimpleMDE = require('simplemde/dist/simplemde.min.js');

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  @ViewChild('simplemde') textarea : ElementRef;
  postForm: FormGroup;
  mde: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
	this.createForm();
  }

  ngAfterViewInit() {
	this.mde = new SimpleMDE({
	  element: this.textarea.nativeElement,
	  showIcons: ["code", "table"],
	  forceSync: true,
	  autosave: {
		enabled: true,
		delay: 10000,
		uniqueId: 'abcvasd'
	  }
	});

	this.mde.value("Demo");
  }
  createForm(){
	this.postForm = this.formBuilder.group({
	  title: ['', Validators.required],
	  tag: '',
	  body:''
	});
  }

  onSubmit(){
	console.log(this.postForm.value);
	console.log(this.mde.value());
  }

}
