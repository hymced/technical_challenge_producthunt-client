import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

/** @title Basic datepicker */
@Component({
  selector: 'app-component-datepicker',
  templateUrl: './datepicker.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule],
})
export class DatepickerComponent {

  altTheme: boolean = false;
  changeTheme() {
    this.altTheme = !this.altTheme;
  }

}