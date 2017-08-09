import { Component, OnInit, HostBinding} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @HostBinding('attr.class') cssClass = "ui page grid";
  postForm: FormGroup;
  post_id: string;
  constructor(private formBuilder: FormBuilder, private location: Location) {
  }

  ngOnInit() {
	this.createForm();
	this.markdown_process();
	this.post_id = this.generate_unique_id();
  }

  createForm(){
	this.postForm = this.formBuilder.group({
	  title: ['', Validators.required],
	  tag: '',
	  body:''
	});
  }

  markdown_data: string;
  markdown_process(){
	const bodyControl = this.postForm.get('body');

	let bc = bodyControl.valueChanges.share();
	bc.subscribe(val => this.markdown_data =  this.md_text(val));

	// auto save every 20 characters
	bc.filter(val => val.length % 20 ==0 ).subscribe(val => {
	  console.log("save id: " + this.post_id +"---" + val);
	});
  }

  md_text(text): string{
	return text.replace(/^( *(\d+\. {1,4}|[\w\<\'\">\-*+])[^\n]*)\n{1}(?!\n| *\d+\. {1,4}| *[-*+] +|$)/gm, function(text) {
	  return text.trim() + "  \n";
	})
  }

  onSubmit(){
	console.log(this.postForm.value);
  }

  change_url(){
	//this.location.go('new-post/12345'); // press back button will take you back
	this.location.replaceState("/new-post/"+this.post_id); // press back button won't take you back
  }

  generate_unique_id(){
	return 'pid-' + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9);
  }

}
