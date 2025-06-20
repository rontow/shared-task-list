import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task-component/task-component';
import { HomeComponent } from './home-component/home-component';
import {HeaderComponent } from './components/header-component/header-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,HeaderComponent, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'online-tasks';
}
