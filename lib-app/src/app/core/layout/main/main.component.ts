import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [
        RouterOutlet,
    ],
    template: `
        <main class="main-container">
            <router-outlet></router-outlet>
        </main>
    `,
    styles: `
    :host {
      flex-grow: 1;
      margin-top: 64px;
      padding: 1rem;
      width: max-content;
    }
    .main-container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    `
})
export class MainComponent {

}
