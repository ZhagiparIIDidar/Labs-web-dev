// app/task-list/task-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';
import { TaskStatusPipe } from '../pipes/task-status-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskStatusPipe, RouterLink],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() showDetails = false;
  @Output() toggleStatus = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();

  onToggle(id: number) {
    this.toggleStatus.emit(id);
  }

  onDelete(id: number) {
    this.deleteTask.emit(id);
  }

  getPriorityClass(priority: string): string {
    return `priority-${priority}`;
  }
}