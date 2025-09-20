import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',   // ✅ use actual filename
  styleUrls: ['./app.css']     // ✅ plural, and match filename
})

export class AppComponent {
  display: string = '';

  append(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  backspace() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    try {
      this.display = eval(this.display).toString();
    } catch {
      this.display = 'Error';
    }
  }
}
