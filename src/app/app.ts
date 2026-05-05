import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('portifolio');
}