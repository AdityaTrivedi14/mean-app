import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredValue = '';
  newPost = 'Change Me';

  constructor() { }

  ngOnInit(): void {}

  onAddClick(){
    // alert('Post Added');
    this.newPost = this.enteredValue;
  }

}
