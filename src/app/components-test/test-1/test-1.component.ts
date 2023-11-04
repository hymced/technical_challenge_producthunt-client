import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-test-test-1',
  templateUrl: './test-1.component.html',
})
export class Test1Component {
  userName: string = "default user";

  title="example of property binding";
  isDisabled= true;

  @Input() parentMessage: string = 'default text';
  closeLabel: string = "example of attributes binding";
  closeMe() {
    window.alert(this.parentMessage);
  }

  name=""
  clearName() {
    this.name="";
  }

  value="";
  clearValue() {
    this.value="";
  }

  updatedCounter: number = 0;
  onCounterChanged(count: number) {
    this.updatedCounter = count;
  }
}