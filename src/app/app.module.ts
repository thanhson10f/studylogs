import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { HttpModule } from '@angular/http';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostDetailsContentComponent } from './posts/post-details-content/post-details-content.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { MdeditorComponent } from './mdeditor/mdeditor.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/:id', component: PostDetailsComponent},
  { path: 'new-post', component: NewPostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostListComponent,
    PostItemComponent,
    PostDetailsComponent,
    PostDetailsContentComponent,
    NewPostComponent,
    MdeditorComponent,
  ],
  imports: [
	RouterModule.forRoot(
	  appRoutes,
	  { enableTracing: true } //debugging purpose only
	),
    BrowserModule,
	HttpModule,
	ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
