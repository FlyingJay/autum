import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timestampPipe'
})
export class TimestampPipe implements PipeTransform {
  transform(datetime: string): string {
    return datetime ? moment(datetime).format('h:m A') : '';
  }
}
