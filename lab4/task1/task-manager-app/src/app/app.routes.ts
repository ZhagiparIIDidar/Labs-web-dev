// app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./app').then(c => c.AppComponent)
  },
  {
    path: 'tasks',
    loadComponent: () => import('./task-list/task-list').then(c => c.TaskListComponent)
  }
];