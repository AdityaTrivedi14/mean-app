import { Component } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'mean-app';

  storedPosts: Post[] = [];

  onPostAdded(post: any){
    this.storedPosts.push(post);
  }
}
