import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

// import { FormsModule } from '@angular/common';
// import { CommonModule } from '@angular/common';
// import { DatePipe } from '@angular/common';
import { SharedModule } from 'src/app/shared'; // must be imported because this Component is a Standalone Component, cf app-test

import { DateAdapter } from '@angular/material/core';

/** @title Datepicker Component from Angular Material */
@Component({
  standalone: true,
  selector: 'app-component-datepicker',
  templateUrl: './datepicker.component.html',
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule,

    SharedModule, // must be imported because this Component is a Standalone Component, cf app-test
  ],
})
export class DatepickerComponent {

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('fr-FR');
  }

  @Input() callback: Function;

  dateStart = new Date();
  dateMax = new Date();
  dateInput: Date;

  handleInput(e: any) {
    this.dateInput = new Date(e.target.value);
    this.callback(this.dateInput);
  }

}