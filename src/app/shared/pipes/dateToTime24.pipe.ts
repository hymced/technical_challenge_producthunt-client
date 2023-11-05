import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'dateToTime24'})
export class DateToTime24Pipe implements PipeTransform {
  transform(date: Date | null, format: string = "HH:mm"): string | null {
    const datePipe = new DatePipe("fr-FR");
    return datePipe.transform(date, format);
  }
}