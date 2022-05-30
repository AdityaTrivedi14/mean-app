import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

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

  posts = [];

}
