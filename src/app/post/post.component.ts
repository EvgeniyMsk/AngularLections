import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  @Input()
  post: Post

  @Output()
  remove: EventEmitter<number> = new EventEmitter<number>()

  @ContentChild('info', {static: true}) infoRef: ElementRef

  ngOnInit(): void {
  }

  removePost() {
    this.remove.emit(this.post.id)
  }

  changeColor() {
    this.infoRef.nativeElement.style.color = 'black';
  }
}
