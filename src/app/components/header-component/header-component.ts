import { Component , signal} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  initialDate: Date = new Date();
  currentDate = signal(
    `${this.initialDate.toLocaleDateString('he-IL', { weekday: 'long' })}, ${this.initialDate.getDate()}/${this.initialDate.getMonth() + 1}/${this.initialDate.getFullYear()}`
  );
}
