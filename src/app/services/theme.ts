import { Injectable, signal, computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type ThemeType = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private platformId = inject(PLATFORM_ID);

  private theme = signal<ThemeType>('dark');

  currentTheme = this.theme.asReadonly();
  isDark = computed(() => this.theme() === 'dark');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme') as ThemeType | null;
      if (saved) {
        this.theme.set(saved);
      }
    }
    effect(() => {
      const current = this.theme();

      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.className = current;
        localStorage.setItem('theme', current);
      }
    });
  }

  toggleTheme() {
    this.theme.update(t => (t === 'dark' ? 'light' : 'dark'));
  }
}