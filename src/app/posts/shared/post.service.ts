import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  headers = new Headers({
	'Content-Type': 'application/json'
  });

  get_post(): Observable<Post[]>{
   
	let url: string = "http://localhost:3000/api/posts";
	
	return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {
	  return Observable.throw(err);
	});

  }

  get_post_by_id(id: number): Observable<Post>{
	let url: string = "http://localhost:3000/api/posts/" + id;

	return this.http.get(url, {headers: this.headers})
	  .map(res => res.json())
	  .catch(err => {
		return Observable.throw(err);
	  });
  }

}
