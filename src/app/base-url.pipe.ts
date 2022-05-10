import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'baseUrl',
})
export class BaseUrlPipe implements PipeTransform {
  transform(url: string): string {
    return url.replace(/^https?:\/\/(www.)?/i, '').split(/[/?]/)[0];
  }
}
