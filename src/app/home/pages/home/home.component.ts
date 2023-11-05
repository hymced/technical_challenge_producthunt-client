import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Welcome To Product Hunt Posts Viewer!</h1>
    <p>Today's date in case you've lost track of time: {{today | date:"short"}}</p>
  `,
})
export class HomeComponent {
  today = new Date();
}