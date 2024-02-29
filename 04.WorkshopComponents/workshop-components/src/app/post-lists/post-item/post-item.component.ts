import { Component, Input } from '@angular/core';
import { Post } from 'src/app/types/posts';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input('post') post = {} as Post;
}
