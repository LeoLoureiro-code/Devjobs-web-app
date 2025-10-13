import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from "../components/search-bar/search-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Entertainment-web-app');

  toggleTheme(isDark: boolean) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(isDark ? 'dark-theme' : 'light-theme');
}

}
