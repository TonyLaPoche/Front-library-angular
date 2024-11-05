import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'books',
        loadComponent: () => import('./views/books/books.component').then(m => m.BooksComponent),
    },
    {
        path: 'authors',
        loadComponent: () => import('./views/author/author.component').then(m => m.AuthorComponent),
    },
    {
        path: 'kinds',
        loadComponent: () => import('./views/kinds/kinds.component').then(m => m.KindsComponent),
    }

];
