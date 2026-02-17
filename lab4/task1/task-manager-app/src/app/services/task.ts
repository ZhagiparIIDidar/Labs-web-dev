// app/services/task.service.ts
import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Изучить Angular',
      description: 'Пройти основы Angular',
      completed: false,
      priority: 'high',
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Создать проект',
      description: 'Написать простое приложение',
      completed: true,
      priority: 'medium',
      createdAt: new Date()
    }
  ]);

  getTasks() {
    return this.tasks.asReadonly();
  }

  addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    const newTask: Task = {
      ...task,
      id: Date.now(),
      createdAt: new Date()
    };
    this.tasks.update(currentTasks => [...currentTasks, newTask]);
  }

  toggleTaskStatus(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }
}