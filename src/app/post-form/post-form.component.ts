import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output()
  em: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput', { static: false }) inputRef: ElementRef

  title: string = ''
  text: string = ''
  id = 3

  addPost() {
    if (this.text.trim() && this.title.trim())
    {
      const post = {
        id: this.id++,
        title: this.title,
        text: this.text
      }
      this.text = ''
      this.title = ''
      this.em.emit(post)
      console.log(post)
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus()
  }

}
