import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { Theme } from './services/theme';
import { LucideMoon, LucideSun } from '@lucide/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, RouterLink, LucideMoon, LucideSun],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('portifolio');

  constructor(public theme: Theme) {}

  changeTheme() {
    this.theme.toggleTheme();
  }
}