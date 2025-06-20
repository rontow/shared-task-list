import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../components/task-component/task-component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule,TaskComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {
  tasks: string[] = [
      'clean',
      'buy',
      'wash',
      'brush',
      'sell'
    ];

    constructor() { }

    ngOnInit(): void {
    }
}
