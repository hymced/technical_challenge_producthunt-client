import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateToISO'})
export class DateToISOPipe implements PipeTransform {
  transform(date: Date | null): string | null {
    return date ? date.toISOString() : null;
  }
}