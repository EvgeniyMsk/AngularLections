import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = ''): Post[] | any {
    if (!search.trim()) {
      return null
    } else {
      return posts.filter(p => p.text.toLowerCase().includes(search))
    }
  }

}
