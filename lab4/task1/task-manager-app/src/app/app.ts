// app/app.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form';
import { TaskListComponent } from './task-list/task-list';
import { TaskService } from './services/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TaskFormComponent,
    TaskListComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Task Manager';
  showTaskDetails = false;
  
  private taskService = inject(TaskService);
  tasks = this.taskService.getTasks();

  onTaskAdded(taskData: any) {
    this.taskService.addTask(taskData);
  }

  onToggleStatus(id: number) {
    this.taskService.toggleTaskStatus(id);
  }

  onDeleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  toggleDetails() {
    this.showTaskDetails = !this.showTaskDetails;
  }
}