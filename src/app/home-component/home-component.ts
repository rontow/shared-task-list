import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../components/task-component/task-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TaskModel} from '../models/task-model';
@Component({
  selector: 'app-home',
  imports: [CommonModule,TaskComponent, FormsModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {
  tasks: TaskModel[] = [
      new TaskModel("בדיקה", new Date(2025,3,21)),
      new TaskModel("בדיקה 2", new Date(2025,3,21)),
      new TaskModel("בדיקה 3", new Date(2025,3,21)),
      new TaskModel("בדיקה 4", new Date(2025,3,21)),
      new TaskModel("בדיקה 5", new Date(2025,3,21))
    ];
    taskName: string = "";
    hasDeadLine: boolean = false;
    taskDueDate: string = ""
    constructor() { }
    addTask(name: string, hadDueDate: boolean, dueDate: string): void{
      if(hadDueDate){
        this.tasks.push(new TaskModel(name, new Date(),new Date(dueDate)));
      }
      else{
        this.tasks.push(new TaskModel(name, new Date()));
      }
    }
    ngOnInit(): void {
    }
}
