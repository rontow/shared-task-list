import { Component , OnInit, Input, signal} from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  standalone: true,
  templateUrl: './task-component.html',
  styleUrl: './task-component.css'
})
export class TaskComponent {
  @Input() name: string = '';
}