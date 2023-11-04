import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: ``,
})
export class ForbiddenComponent {

  constructor(private router: Router) {
    this.router.navigate(['/']);
  }

}