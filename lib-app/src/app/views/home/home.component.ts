import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p>
      home works!
    </p>
  `,
  styles: `
    :host {
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 1200px;
      width: 100%;
    }

    `
})
export class HomeComponent {

}
