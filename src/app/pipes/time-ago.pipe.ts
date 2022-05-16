import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'timeago.js';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(timestamp: number): string {
    return format(timestamp * 1000);
  }
}
