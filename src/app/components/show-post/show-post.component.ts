import { Component, OnInit } from '@angular/core';
import {PostServiceService} from "../../services/post-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  post: any
  showId: boolean

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostServiceService) { }

  ngOnInit(): void {
    this.showId = false
    this.route.params.subscribe(params => {
      const id: number = params.id
      this.post = this.postService.getPosts().find(p => p.id === +id)
    })

    this.route.queryParams.subscribe(params => {
      if (params.showId)
        this.showId = true
    })
  }

  loadPostId() {
    this.router.navigate(['/posts', this.post.id])
  }

  showIdProgram() {
    this.router.navigate(['/posts', this.post.id], {
      queryParams: {
        showId: true
      }
    })
  }
}
