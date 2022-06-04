import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostServiceService } from 'src/app/services/post-service.service';
import {Post} from '../../post.model'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle!: string;
  enteredContent!: string;
  // newPost = 'Change Me';
  // @Output() postCreated = new EventEmitter<Post>();
  postCreated = new EventEmitter<Post>();

  constructor(private postsService: PostServiceService) { }

  ngOnInit(): void {}

  onAddPost(form: NgForm){
    (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event: any) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, false)
        })
    })();

    // alert('Post Added');
    // this.newPost = this.enteredValue;

    if(form.invalid){
      return;
    }
    // const post: Post = {
    //   title!: form.value.title,
    //   content!: form.value.content
    // };
    // this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
