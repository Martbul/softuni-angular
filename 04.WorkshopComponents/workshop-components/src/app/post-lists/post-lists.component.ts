import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Post } from './../types/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './post-lists.component.html',

  styleUrls: ['./post-lists.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getPosts(5).subscribe((posts) => {
    //   console.log(posts);
    //   this.posts = posts;

    //   setTimeout(() => {
    //     this.isLoading = false;
    //   }, 2000);
    // });

    this.api.getPosts(5).subscribe({
      next: (posts) => {
        console.log(posts);
        this.posts = posts;

        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error: ', err);
      },
    });
  }
}
