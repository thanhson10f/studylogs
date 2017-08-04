import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { HttpModule } from '@angular/http';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostDetailsContentComponent } from './posts/post-details-content/post-details-content.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/:id', component: PostDetailsComponent}
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
  ],
  imports: [
	RouterModule.forRoot(
	  appRoutes,
	  { enableTracing: true } //debugging purpose only
	),
    BrowserModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
