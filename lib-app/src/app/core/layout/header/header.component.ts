import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    MatToolbar,
    RouterLinkActive
  ],
  template: `
    <mat-toolbar color="primary" class="head-container">
      <a routerLink="/" routerLinkActive="active" class="head-button" aria-label="title"
         aria-description="Library home link page">Library App</a>
      <span class="head-spacer">
      </span>
      <a routerLink="books" routerLinkActive="active">Books</a>
      <a routerLink="authors" routerLinkActive="active">authors</a>
      <a routerLink="kinds" routerLinkActive="active">kinds</a>
    </mat-toolbar>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 74px;
      width: 100%;
      z-index: 2;
    }
    .head-container {
      height: 64px;
      padding: 0 1rem;
      display: flex;
      gap: 1rem;

    }
  `
})
export class HeaderComponent {

  redirect(home: string) {

  }
}
