import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './components/task/task';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task, Home,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'online-tasks';
}
