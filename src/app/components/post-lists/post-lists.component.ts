import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostServiceService } from 'src/app/services/post-service.service';
import {Post} from '../../post.model'

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit, OnDestroy {

  constructor(private postService: PostServiceService) { }

  posts: Post[] = [];
  private postSub!: Subscription;

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }

  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

  // posts = [
  //   {
  //     title: 'First Name',
  //     content: 'First content'
  //   },
  //   {
  //     title: 'Second Name',
  //     content: 'Second content'
  //   },
  //   {
  //     title: 'Third Name',
  //     content: 'Third content'
  //   },
  // ]

  // posts: Post[] = [];

}
