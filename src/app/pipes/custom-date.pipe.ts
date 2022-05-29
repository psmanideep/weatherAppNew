import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, format: string): any {
    return this.setFormat(value, format);
  }

  setFormat(secs: any, format: any) {
    return moment.unix(secs).format(format);
  }
}
