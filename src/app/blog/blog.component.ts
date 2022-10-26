import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog = {
    id: 0,
    title: '',
    body: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  saveBlog(value: any) {
    this.blog.id = value.id;
    this.blog.title = value.title;
    this.blog.body = value.body;
  }

}
